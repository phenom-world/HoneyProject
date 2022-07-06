import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./emailSent.css";

const EmailSent = () => {
  const { email } = useParams();
  const navigate = useNavigate()
  return (
    <div className="emailsent">
      <div className="emailsent-app">
        <p>Password Reset</p>
        <p>
          An email with a password reset Link has been sent to your email &nbsp;
          <b>{email}</b> <br />
          check your email and click on the link to proceed, the link expires in 10minutes
        </p>
          <button className="emailsent-button" onClick ={() => navigate("/login")}>Proceed</button>
      </div>
    </div>
  );
};

export default EmailSent;
