import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Post from './Pages/Post';
import CreatePost from './Pages/CreatePost';
import SpecificPost from './Pages/Post/specificPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route exact path="/create-post" element={<CreatePost />} />
        <Route exact path="/posts/:id" element={<SpecificPost />} />
      </Routes>
    </BrowserRouter>
  );
}
