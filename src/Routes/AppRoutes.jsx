/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */
=======
E-mail: sadw621@gmail.com -  */
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../components/pages/LandingPage';
<<<<<<< HEAD
import Login from '../components/pages/LoginPage';
=======
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
import WelcomePage1 from '../components/pages/WelcomePage1';
import WelcomePage2 from '../components/pages/WelcomePage2';
import WelcomePage3 from '../components/pages/WelcomePage3';



function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Landing  />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/landing" element={<Landing  />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;