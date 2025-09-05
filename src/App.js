import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Videos from './pages/Videos';
import ContributingMembers from "./pages/ContributingMembers";
import WhatTeachersMean from "./pages/WhatTeachersMean";
import PhotoGallery from './pages/PhotoGallery';
import StudentTribute from './pages/StudentTribute'; // <-- ADD THIS LINE
import StudentLitreature from './pages/gallery/StudentLitreature';

const App = () => (
  <Router>
    <Header />
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<ContributingMembers />} />
        <Route path="/what-teachers-mean" element={<WhatTeachersMean />} />
        <Route path="/photo-gallery/*" element={<PhotoGallery />} />
        <Route path="/student-tribute" element={<StudentTribute />} />
        <Route path="/photo-gallery/litreature" element={<StudentLitreature />} />
      </Routes>
    </AnimatePresence>
    <Footer />
  </Router>
);

export default App;