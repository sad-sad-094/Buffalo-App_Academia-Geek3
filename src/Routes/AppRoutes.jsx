/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import { React } from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Days from '../components/pages/Days';
import Gender from '../components/pages/GenderPage';
import Height from '../components/pages/PhysicalDataPage';
import Landing from '../components/pages/LandingPage';
import Login from '../components/pages/LoginPage';
import SetsWorkout from '../components/pages/SetsWorkout';
import Suscription from '../components/pages/Suscription';
import WelcomePage1 from '../components/pages/WelcomePage1';
import WelcomePage2 from '../components/pages/WelcomePage2';
import WelcomePage3 from '../components/pages/WelcomePage3';
import CreateAccount from '../components/pages/CreateAccountPage';

import {Navigate} from 'react-router-dom'
import Resume from '../components/pages/Resume';

import HomePage from '../components/pages/HomePage';
import EditUser from '../components/pages/EditUser';





function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />

        <Route path="/height" element={<Height />} />
        
        <Route path="/suscription" element={<Suscription />} />
        <Route path="/days" element={<Days />} />
        <Route path="/sets" element={<SetsWorkout />} />
        <Route path="/login" element={<Login />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/physicaldata" element={ <Height />} />
        <Route path="/gender" element={ <Gender />} />
        <Route path="/edituser" element={ <EditUser />} />


        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;