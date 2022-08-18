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
import { useSelector } from 'react-redux';
import {PrivateRoutes, PublicRoutes} from '../components/modules/IsLogged';
import Suscription from '../components/pages/SuscriptionPage';
import SetsWorkout from '../components/pages/SetsWorkoutPage';
import Resume from '../components/pages/ResumePage';
import Days from '../components/pages/DaysPage';
import EditUser from '../components/pages/UserProfilePage';



function AppRoutes() {

  const logged = useSelector(state => state.userLogin.isLogged);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes auth={logged}> <Landing /> </PublicRoutes> } />
        <Route path="/welcome1" element={<PublicRoutes auth={logged}> <WelcomePage1 /> </PublicRoutes>} />
        <Route path="/welcome2" element={<PublicRoutes auth={logged}> <WelcomePage2 /> </PublicRoutes>} />
        <Route path="/welcome3" element={<PublicRoutes auth={logged}> <WelcomePage3 /> </PublicRoutes>} />
        <Route path="/login" element={<PublicRoutes auth={logged}> <Login /> </PublicRoutes> } />
        <Route path="/createaccount" element={<PublicRoutes auth={logged}> <CreateAccount /> </PublicRoutes> } />

        <Route path="/home" element={<PrivateRoutes auth={logged}> <HomePage /> </PrivateRoutes> } />
        <Route path="/physicaldata" element={<PrivateRoutes auth={logged}> <Height /> </PrivateRoutes> } />
        <Route path="/gender" element={<PrivateRoutes auth={logged}> <Gender /> </PrivateRoutes> } />
        <Route path="/days" element={<PrivateRoutes auth={logged}> <Days /> </PrivateRoutes>  } />
        <Route path="/resume" element={<PrivateRoutes auth={logged}> <Resume /> </PrivateRoutes> } />
        <Route path="/sets" element={<PrivateRoutes auth={logged}> <SetsWorkout /> </PrivateRoutes> } />
        <Route path="/profile" element={<PrivateRoutes auth={logged}> <EditUser /> </PrivateRoutes> } />




        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;