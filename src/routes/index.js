import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Filme from '../pages/Filmes';

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filme/:id" element={<Filme />} />
    </Routes>
  );
}
