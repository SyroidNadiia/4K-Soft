import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
