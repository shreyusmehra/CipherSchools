import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { isValidUser } from "./Validator";

const SignUpForm = ({ setIsLoggedIn, LoginDetails, setLoginDetails }) => {
  const [SignUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpDetails({ ...SignUpDetails, [e.target.name]: e.target.value });
    setLoginDetails({
      ...LoginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidUser({ ...SignUpDetails }) &&
      SignUpDetails.password !== "" &&
      SignUpDetails.name !== ""
    ) {
      alert("You have Successfully Signed Up");
      setIsLoggedIn(true);
      const path = "/";
      navigate(path);
      setErr("");
    } else {
      setErr("Fill all of the below fields Correctly");
    }
  };

  return (
    <>
      <form className="form">
        <div className="form-div">
          <h2>SignUp</h2>
          <span style={{ color: "red" }}>{err}</span>
          <br />
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            required
            id="input-name"
            value={SignUpDetails.name}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            id="input-email"
            value={SignUpDetails.email}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            id="input-password"
            value={SignUpDetails.password}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            SignUp
          </button>
          <br />
          <br />
        </div>
      </form>
      <h4>Already registered user?</h4>
      <Link to="/login" className="link">
        Login
      </Link>
      <Outlet />
    </>
  );
};

export default SignUpForm;
