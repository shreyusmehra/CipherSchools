import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidUser } from "./Validator";

const LoginForm = ({ setIsLoggedIn, LoginDetails, setLoginDetails }) => {
  let navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      LoginDetails.email !== "" &&
      LoginDetails.password !== "" &&
      isValidUser({ ...LoginDetails })
    ) {
      setIsLoggedIn(true);
      const path = "/";
      navigate(path);
      setErr("");
    } else {
      setErr("Invalid Credentials");
    }
  };

  const handleChange = (e) => {
    setLoginDetails({
      ...LoginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <div className="form-div">
          <h2>Login</h2>
          <span style={{ color: "red" }}>{err}</span>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="input-email"
            required
            value={LoginDetails.email}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="input-password"
            required
            value={LoginDetails.password}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            Login
          </button>
          <br />
          <br />
        </div>
      </form>
      <h4>Not registered yet?</h4>
      <Link to="/signup" className="link">
        SignUp
      </Link>
    </>
  );
};
export default LoginForm;
