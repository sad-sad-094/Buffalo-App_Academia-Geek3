/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { ToastContainer, Zoom } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store/store';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {

  return (

      <Provider store={Store}>
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Zoom} />
      </Provider>

  );

}

export default App;
