import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Post from './Pages/Post';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
