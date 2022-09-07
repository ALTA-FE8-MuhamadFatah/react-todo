// Import library
import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Component
import HomePage from "./pages/HomePage/HomePage"
import DetailPage from "./pages/DetailPage/DetailPage"

const App = () => {
  // Set bearer token
  axios.defaults.headers.common = {
    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App