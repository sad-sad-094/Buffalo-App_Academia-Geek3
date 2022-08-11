<<<<<<< HEAD
/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React, { useState } from 'react';
import { WelcomeTextContainer, BasicContainer, WelcomeContainer, SingUp, GoogleLogo } from '../../Styles/GlobalStyles';
import LoginInput from '../modules/LoginInput';
import LoginButton from '../modules/LoginButton';
import app, { db, google } from '../../utils/Firebase';
import firebase  from 'firebase';
=======
import React, { useState } from 'react';
import { WelcomeTextContainer, BasicContainer, WelcomeContainer, SingUp } from "../../styles/GlobalStyles";
import LoginInput from '../modules/LoginInput';
import LoginButton from '../modules/LoginButton';
import app, { db } from '../../utils/FireBase';
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login(props) {

<<<<<<< HEAD

=======
  
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
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

  const letLogin = () => {
    app.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        if (!response.user.emailVerified) {
          toast.warn('Your account has not been verified, please verify your account before attempting to login')
        } else {
          props.setUserId(response.user.uid);
          db.collection('userData').doc(response.user.uid).get() //get la base de datos
            .then(doc => {
              if (doc.exists) {
                let userData = doc.data();
                props.setUserCoins(userData.coins);
                props.setUserPhone(userData.phone);
                props.setUserName(response.user.displayName);
                props.setUserEmail(response.user.email);
                props.setIsLogged(true);
                navigation('/home');
              } else {
                toast.error('Please call the admin because your sing up has an error.')
              }
            })
        }
      })
      .catch(err => {
        switch (err.code) {
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
      })
  }

<<<<<<< HEAD
  const loginGoogle = () => {

    firebase.auth()
      .signInWithPopup(google)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        let credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
  }

=======
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

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
<<<<<<< HEAD
        <GoogleLogo src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660161233/BuffaloApp/GoogleLogo_h0blc0.png" onClick={loginGoogle} />
=======
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
        <SingUp>
          <p>Don´t have an account? <a onClick={() => { navigation("/createaccount") }}>Sing up</a></p>
        </SingUp>
      </WelcomeContainer>

    </div>

  )

}

export default Login;
