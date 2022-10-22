import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppPage from "./pages/AppPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUserDetails(data.user._json);
    } catch (err) {
      console.log(err);
    }

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const url = `http://localhost:5000/auth/verify`;
        const { data: res } = await axios.post(url, { token: token });
        // console.log(res);
        setUserDetails(res._json);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <Box>
      <Navbar userDetails={userDetails} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/app"
          element={
            userDetails ? (
              <AppPage userDetails={userDetails} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            userDetails ? (
              <Navigate to="/app" />
            ) : (
              <LoginPage setUserDetails={setUserDetails} />
            )
          }
        />
        <Route
          path="/signup"
          element={userDetails ? <Navigate to="/app" /> : <SignupPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
