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
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const url = `http://localhost:5000/auth/verify`;
        const { data: res } = await axios.post(url, { token: token });
        setUserDetails(res._json);
      } else {
        const url = `http://localhost:5000/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        setUserDetails(data.user._json);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  const [resumeDetails, setResumeDetails] = useState({
    basic: {
      name: "",
      email: "",
    },
    profiles: [],
    education: [],
    projects: [],
    work: [],
    certifications: [],
    skills: [],
  });

  return (
    <Box>
      <Navbar userDetails={userDetails} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/app"
          element={
            userDetails ? (
              <AppPage
                resumeDetails={resumeDetails}
                setResumeDetails={setResumeDetails}
              />
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
        <Route
          path="/settings"
          element={userDetails ? <SettingsPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer />
       */}
    </Box>
  );
};

export default App;
