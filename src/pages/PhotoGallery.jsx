import React from "react";
import { Routes, Route } from "react-router-dom";
import TeachersGallery from "./gallery/TeachersGallery";
import GamesGallery from "./gallery/GamesGallery";
import ChartsGallery from "./gallery/ChartsGallery";
import ClassCampusGallery from "./gallery/ClassCampusGallery";

export default function PhotoGallery() {
  return (
    <Routes>
      <Route path="teachers" element={<TeachersGallery />} />
      <Route path="games" element={<GamesGallery />} />
      <Route path="charts" element={<ChartsGallery />} />
      <Route path="class-campus" element={<ClassCampusGallery />} />
    </Routes>
  );
}