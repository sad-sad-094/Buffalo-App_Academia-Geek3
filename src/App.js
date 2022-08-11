/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */
=======
E-mail: sadw621@gmail.com -  */
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

import React from 'react';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { ToastContainer, Zoom } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';

function App(props) {

  return (

    <>
      <Provider store={store}>
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
    </>

  );

}

export default App;
