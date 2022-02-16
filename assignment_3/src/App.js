import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import "./App.css";
import NoPage from "./components/NoPage";
const SignUpForm = lazy(() => import("./components/SignUpForm"));

function App() {
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          LoginDetails={LoginDetails}
          setLoginDetails={setLoginDetails}
        />

        <Routes>
          <Route
            path={"/"}
            element={
              <LandingPage
                isLoggedIn={isLoggedIn}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            }
          />
          <Route
            path={"/login"}
            element={
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                LoginDetails={LoginDetails}
                setLoginDetails={setLoginDetails}
              />
            }
          />
          <Route
            path={"/signup"}
            element={
              <SignUpForm
                setIsLoggedIn={setIsLoggedIn}
                LoginDetails={LoginDetails}
                setLoginDetails={setLoginDetails}
              />
            }
          />
          <Route path={"*"} element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
