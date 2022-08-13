/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import { React } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Gender from '../components/pages/Gender';
import Height from '../components/pages/Height';
import Landing from '../components/pages/LandingPage';
import Login from '../components/pages/LoginPage';
import Suscription from '../components/pages/Suscription';
import WelcomePage1 from '../components/pages/WelcomePage1';
import WelcomePage2 from '../components/pages/WelcomePage2';
import WelcomePage3 from '../components/pages/WelcomePage3';



function AppRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      
        <Route path="/welcome1" element={<WelcomePage1 />} />
        <Route path="/welcome2" element={<WelcomePage2 />} />
        <Route path="/welcome3" element={<WelcomePage3 />} />
        <Route path="/height" element={<Height />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/suscription" element={<Suscription />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )

}


export default AppRoutes;