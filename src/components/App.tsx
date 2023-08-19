import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const App = () => {
  return (
    <Routes>
      <Route index element={<RegisterPage />}></Route>
    </Routes>
  );
};

export default App;



// hbAgw0CueOt4pJzS;
// mongodb+srv://Nadiia:<password>@cluster0.a6r9jkq.mongodb.net/
