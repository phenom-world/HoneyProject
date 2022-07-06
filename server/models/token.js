import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  token: {
    type: String,
    required: true,
  },
});

const Token = mongoose.model("Token", TokenSchema);

export default Token;
