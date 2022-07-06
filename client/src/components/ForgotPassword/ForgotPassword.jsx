import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./forgotPassword.css";
import { forgotpassword } from "../../actions/auth";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotpassword(formData, navigate));
  };
  return (
    <div>

      <Container component="main" maxWidth="sm" className="forgotPassword">
        <p className="fgp-p">Reset Password</p>
        <form className="fgp-form" onSubmit={handleSubmit}>
          <input
            className="fgp-bar"
            placeholder="Email Address"
            name="email"
            type="email"
            required
            onChange={(e) => {
              setFormData({ email: e.target.value });
            }}
          />
            <button className="fgp-btn" type="submit">
              Send Password Reset Link
            </button>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
