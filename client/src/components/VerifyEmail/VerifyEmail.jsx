import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./verifyEmail.css";

const EmailSent = () => {
  const { email } = useParams();
  const navigate = useNavigate()
  return (
    <div className="verifyemail">
      <div className="verifyemail-app">
        <p>Verify Email</p>
        <p>
          An email with a verify Email Link has been sent to your email &nbsp;
          <b>{email}</b> <br />
          check your email and click on the link to proceed
        </p>
          <button className="verifyemail-button" onClick ={() => navigate("/login")}>Proceed</button>
      </div>
    </div>
  );
};

export default EmailSent;
