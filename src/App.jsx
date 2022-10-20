import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppPage from "./pages/AppPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
