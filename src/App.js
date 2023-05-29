import React from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Signup from "./features/user/signup/Signup";
import Login from "./features/user/login/Login";
import NavigationBar from "./features/navigation/NavigationBar";
import { fetchInitialState } from "./features/user/userSlice";

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialState());
  }, [dispatch]);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
