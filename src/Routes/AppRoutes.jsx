/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../components/pages/LandingPage';
import Login from '../components/pages/LoginPage';
import WelcomePage1 from '../components/pages/WelcomePage1';
import WelcomePage2 from '../components/pages/WelcomePage2';
import WelcomePage3 from '../components/pages/WelcomePage3';



function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing  />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;