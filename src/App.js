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
    "Authorization": `Bearer f046e87d06302ef3649b10ba4b4b7742d34e3497`
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