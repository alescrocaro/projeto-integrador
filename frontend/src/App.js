import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Post from './Pages/Post';
import CreatePost from './Pages/CreatePost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
