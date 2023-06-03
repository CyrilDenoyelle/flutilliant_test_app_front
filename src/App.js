import React from 'react';
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Signup from "./features/user/signup/Signup";
import Login from "./features/user/login/Login";
import ReportForm from './features/report/form/ReportForm';
import NavigationBar from "./features/navigation/NavigationBar";
import ReportList from './features/report/list/ReportList';
import { fetchInitialState } from "./features/user/userSlice";

import './App.css';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()

  const user = useSelector((state) => state.user);

  useEffect(() => {

    const init = async () => {
      await dispatch(fetchInitialState());

      if (!user) {
        if (!['/login', '/signup'].includes(location.pathname)) {
          navigate('/login')
        }
      } else {
        if (['/login', '/signup'].includes(location.pathname)) {
          navigate('/')
        }
      }

    }
    init();

  }, [dispatch, location.pathname]);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ReportList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<ReportList />} />
        <Route path="/reports/new" element={<ReportForm />} />
      </Routes>
    </>
  );
}

export default App;
