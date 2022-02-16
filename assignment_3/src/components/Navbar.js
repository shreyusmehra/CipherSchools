import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
  LoginDetails,
  setLoginDetails,
}) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginDetails({ [LoginDetails.email]: "", [LoginDetails.password]: "" });
  };

  return (
    <>
      <div className="Navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link" onClick={handleLogout}>
          {!isLoggedIn ? "Login/Register" : `Logout (${LoginDetails.email})`}
        </Link>
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;
