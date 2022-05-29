import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Post from './Pages/ListPost';
import CreatePost from './Pages/CreatePost';
import SpecificPost from './Pages/ShowPost';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Post />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-post" element={<CreatePost />} />
        <Route exact path="/posts/:id" element={<SpecificPost />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
