import React, { useEffect } from "react";
import { verify } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./emailVerified.css";

const EmailVerified = () => {
  const dispatch = useDispatch();
  const { id, token } = useParams();

  useEffect(() => {
    dispatch(verify(id, token));
  }, [id, token]);
  return (
    <div className="emailverified">
      <div className="emailverified-app">
        <p>Email Verified</p>
        <p>
          Email verified, go to back to the other page and click on  &nbsp;
          <b>Proceed</b> to log in
        </p>
      </div>
    </div>
  );
};

export default EmailVerified;
