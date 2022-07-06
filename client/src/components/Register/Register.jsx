import React, { useState } from "react";
import { Container } from "@material-ui/core";
import NaijaStates from "naija-state-local-government";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import Spinner from "../../container/Spinner/Spinner";

import "./register.css";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  state: "",
  gender: "",
  address: "",
  phoneNumber: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState("1");
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    setActive(e.target.id);
    e.target.id === "1" ? setRegister(false) : setRegister(true);
  };

  const states = NaijaStates.states();

  if (isLoading) return <Spinner />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (register) {
      dispatch(signup(formData, navigate, setError));
    } else {
      dispatch(signin(formData, navigate, setError));
    }

  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="sm" className="register">
      <p className="reg-p">{register ? "Register" : "Login"}</p>
      {error && (
        <div className="reg-error">
          <p>{error}</p>
        </div>
      )}
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="regg">
          <p
            key={1}
            className={active === "1" ? "reg-pb active" : "reg-pb"}
            id={"1"}
            onClick={handleClick}
          >
            Login
          </p>
          <p
            key={2}
            className={active === "2" ? "reg-pb active" : "reg-pb"}
            id={"2"}
            onClick={handleClick}
          >
            Register
          </p>
        </div>
        {register ? (
          <>
            <input
              className="reg-bar"
              placeholder="FullName"
              name="fullName"
              required
              onChange={handleChange}
            />
            <input
              className="reg-bar"
              placeholder="Email Address"
              name="email"
              type="email"
              required
              onChange={handleChange}
            />
            <div className="reg">
              <input
                className="reg-ph"
                placeholder="Phone Number"
                name="phoneNumber"
                required
                onChange={handleChange}
              />
              <select
                className="reg-ph"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="Select Gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <input
              className="reg-bar"
              placeholder="Address"
              name="address"
              required
              onChange={handleChange}
            />
            <div className="reg">
              <input
                className="reg-ph"
                placeholder="City"
                name="city"
                required
                onChange={handleChange}
              />
              <select
                className="reg-ph"
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              >
                <option value="Select State">Select State</option>
                {states.map((state) => (
                  <option value={state} key={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="reg">
              <input
                className="reg-ph"
                placeholder="Password"
                name="password"
                type="password"
                required
                onChange={handleChange}
              />
              <input
                className="reg-ph"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                type="password"
                onChange={handleChange}
              />
            </div>

            <p className="p">
              By registering your details, you agree with our Terms &
              Conditions, and Privacy and Cookie Policy.
            </p>
          </>
        ) : (
          <>
            <input
              className="reg-bar"
              placeholder="Email Address"
              name="email"
              type="email"
              required
              onChange={handleChange}
            />

            <input
              className="reg-bar"
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={handleChange}
            />

            <div className="forgot">
              <div className="remember">
                <input type="checkbox" id="remember" name="remember" />
                <label className="pg">Remember me</label>
              </div>
              <Link to="/password/reset">
                <p className="pg">Forgot Your Password?</p>
              </Link>
            </div>
          </>
        )}
        <button type="submit" className="register-btn">
          {register ? "Sign Up" : " Sign In"}
        </button>
      </form>
    </Container>
  );
};

export default Register;
