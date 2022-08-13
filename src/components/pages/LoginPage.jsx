import React, { useState } from 'react';
import { WelcomeTextContainer, BasicContainer, WelcomeContainer, SingUp } from "../../Styles/GlobalStyles";
import LoginInput from '../modules/LoginInput';
import LoginButton from '../modules/LoginButton';
// import app, { db } from '../../utils/Firebase';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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

  // const letLogin = () => {
  //   app.auth().signInWithEmailAndPassword(user.email, user.password)
  //     .then(response => {
  //       if (!response.user.emailVerified) {
  //         toast.warn('Your account has not been verified, please verify your account before attempting to login')
  //       } else {
  //         props.setUserId(response.user.uid);
  //         db.collection('userData').doc(response.user.uid).get() //get la base de datos
  //           .then(doc => {
  //             if (doc.exists) {
  //               let userData = doc.data();
  //               props.setUserCoins(userData.coins);
  //               props.setUserPhone(userData.phone);
  //               props.setUserName(response.user.displayName);
  //               props.setUserEmail(response.user.email);
  //               props.setIsLogged(true);
  //               navigation('/home');
  //             } else {
  //               toast.error('Please call the admin because your sing up has an error.')
  //             }
  //           })
  //       }
  //     })
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/user-not-found":
  //         case "auth/wrong-password":
  //           toast.warn("Incorrect email or password");
  //           break;
  //         case "auth/too-many-requests":
  //           toast.warn("The verification email has been sent too many times.");
  //           break;
  //         default:
  //           break;
  //       }
  //     })
  // }


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
        <LoginButton  />
        <SingUp>
          <p>Don´t have an account? <a href onClick={() => { navigation("/createaccount") }}>Sing up</a></p>
        </SingUp>
      </WelcomeContainer>

    </div>

  )

}

export default Login;
