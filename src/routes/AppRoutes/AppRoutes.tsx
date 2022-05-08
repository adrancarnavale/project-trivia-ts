import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Game, FinalResults } from '../../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<Game />} />
      <Route path="/results" element={<FinalResults />} />
    </Routes>
  );
}

export default AppRoutes;
