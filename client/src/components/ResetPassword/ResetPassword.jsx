import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { resetpassword } from "../../actions/auth";
import "./resetPassword.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { resettoken } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(resetpassword(resettoken, formData, navigate));
  };
  return (
    <div>
      <Container component="main" maxWidth="sm" className="resetPassword">
        <p className="rpd-p">New Password</p>
        <form className="rpd-form" onSubmit={handleSubmit}>
          <input
            className="rpd-bar"
            placeholder="Password"
            name="password"
            type="password"
            required
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <input
            className="rpd-bar"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            required
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
          />
          <button className="rpd-btn" type="submit">
            New Password
          </button>
        </form>
      </Container>
    </div>
  );
};

export default ResetPassword;
