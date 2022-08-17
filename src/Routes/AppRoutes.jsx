/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../components/pages/LandingPage';
import Login from '../components/pages/LoginPage';
import WelcomePage1 from '../components/pages/WelcomePage1';
import WelcomePage2 from '../components/pages/WelcomePage2';
import WelcomePage3 from '../components/pages/WelcomePage3';
import CreateAccount from '../components/pages/CreateAccountPage';
import HomePage from '../components/pages/HomePage';
import Height from '../components/pages/PhysicalDataPage';
import Gender from '../components/pages/GenderPage';



function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/physicaldata" element={ <Height />} />
        <Route path="/gender" element={ <Gender />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;