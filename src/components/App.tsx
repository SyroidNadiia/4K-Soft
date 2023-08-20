import RegisterPage from 'pages/RegisterPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/auth/register" element={<RegisterPage />}></Route>
    </Routes>
  );
};

export default App;



// hbAgw0CueOt4pJzS;
// mongodb+srv://Nadiia:<password>@cluster0.a6r9jkq.mongodb.net/
