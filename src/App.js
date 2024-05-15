import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navigation from "./topBar/topBar";
import NgramSearch from "./pages/NgramSearch/NgramSearch";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngram-search" element={<NgramSearch />} />
      </Routes>
    </Router>
  );
}

export default App;