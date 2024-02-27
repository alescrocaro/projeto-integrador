import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Post from './Pages/ListPost';
import CreatePost from './Pages/CreatePost';
import SpecificPost from './Pages/ShowPost';
import NotFound from './Pages/NotFound';
import Login from './Pages/User/Login';
import Profile from './Pages/User/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Post />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create-post" element={<CreatePost />} />
          <Route exact path="/posts/:id" element={<SpecificPost />} />
          <Route exact path="/users/:id" element={<Profile />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
