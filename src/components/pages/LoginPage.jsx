/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React, { useState } from 'react';
import { WelcomeTextContainer, BasicContainer, WelcomeContainer, SingUp } from '../../Styles/GlobalStyles';
import LoginInput from '../modules/LoginInput';
import LoginButton from '../modules/LoginButton';
import app, { db, google } from '../../utils/Firebase';
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionLogin } from '../../Redux/Actions/Actions';
import { FcGoogle } from 'react-icons/fc';

function Login(props) {


  const defaultUser = () => {
    return {
      email: "",
      password: "",
      name: "",
      phone: ""
    }
  }

  const [user, setUser] = useState(defaultUser());
  const navigation = useNavigate();
  // let selector = useSelector();
  let dispatch = useDispatch();

  const checkLogin = (user) => {
    if (!user.emailVerified) {
      toast.warn('Your account has not been verified, please verify your account before attempting to login')
    } else {
      db.collection('userData').doc(user.uid).get() //get la base de datos
        .then(doc => {
          if (doc.exists) {
            let userData = doc.data();
            let action = Object.assign({}, actionLogin)
            action.payload = { name: user.displayName, coins: userData.coins, phone: userData.phone, email: user.email, isLogged: true, id: user.uid }
            dispatch(action)
            navigation('/physicaldata');
          } else {
            toast.error('Please call the admin because your sing up has an error.')
          }
        })
    }
  }

  const checkLoginErr = (code) => {
    switch (code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        toast.warn("Incorrect email or password");
        break;
      case "auth/too-many-requests":
        toast.warn("The verification email has been sent too many times.");
        break;
      default:
        break;
    }
  }

  const letLogin = () => {
    app.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        checkLogin(response.user);
      })
      .catch(err => {
        checkLoginErr(err.code);
      })
  }

  const loginGoogle = () => {

    firebase.auth()
      .signInWithPopup(google)
      .then((result) => {
        checkLogin(result.user);
      }).catch((error) => {
        checkLoginErr(error.code);
      });
  }


  return (

    <div>
      <WelcomeTextContainer>
        <h1>Welcome Back</h1>
        <p>Sign in to an existing account using your email.</p>
      </WelcomeTextContainer>
      <BasicContainer>
        <LoginInput loginUser={user} loginSetUser={setUser} />
      </BasicContainer>
      <WelcomeContainer>
        <LoginButton login={letLogin} />
        <SingUp>
          <p>Or sign in with: <FcGoogle onClick={loginGoogle} /> </p>
          <p>Don´t have an account? <a onClick={() => { navigation("/createaccount") }}>Sing up</a></p>
        </SingUp>
      </WelcomeContainer>

    </div>

  )

}

export default Login;
