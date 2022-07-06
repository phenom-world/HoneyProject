import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Token from "../models/token.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

export const signup = async (req, res) => {
  const {
    fullName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    gender,
    city,
    state,
    address,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: "User already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Password don't match." });
    }

    const result = await User.create({
      fullName,
      email,
      password,
      phoneNumber,
      gender,
      city,
      state,
      address,
    });

    let token = await new Token({
      userId: result._id,
      token: jwt.sign(
        { email: result.email, id: result._id },
        process.env.JWT_TOKEN_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      ),
    }).save();

    const verifyUrl = `https://t-honey.netlify.app/user/verify/${result._id}/${token.token}`;

    const message = `
      <p>
        You are recieving this email because you  have requested
        to verify your email,  
      </p><p>Press <a href=${verifyUrl} target="_blank">Here</a> to proceed to verify</p>`;

    try {
      sendEmail({
        email: result.email,
        subject: "Verify Email token",
        message,
      });

      res.status(200).json({ message: "email sent" });
    } catch (error) {
      console.log(error);
    }

    // res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(400).json({ message: "invalid link" });
    }

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).json({ message: "invalid link" });
    }

    await User.updateOne(
      { _id: user._id },
      { isVerified: true },
      {
        new: true,
        runValidators: true,
      }
    );
    await Token.findByIdAndRemove(token._id);

    res.status(200).json({ message: "email verified successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist." });
    }

    if(!existingUser.isVerified) {
      return res.status(400).json({message: "Verify your email"})
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "invalid Credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(200)
      .json({ message: "There is no user with that email" });
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `https://t-honey.netlify.app/user/resetpassword/${resetToken}`;

  const message = `
      <p>
        You are recieving this email because you (or someone else) has requested
        the reset of a password, If you are not the one who requested for it,
        Kindly Ignore it.
      </p><p>Press <a href=${resetUrl} target="_blank">Here</a> to proceed </p>`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset token",
      message,
    });

    res.status(200).json({
      message: "Email sent",
    });
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({ message: "Email could not be sent" });
  }
};

export const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { resettoken } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400).json({ message: "invalid token" });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Password don't match." });
    }

    //Set new password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.log(error);
  }
};
