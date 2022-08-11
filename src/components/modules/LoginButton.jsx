/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React from 'react'
import { Button } from '../../Styles/GlobalStyles';

function LoginButton(props) {

  return (

    <Button onClick={props.login} type="button">Login</Button>

  )

}

export default LoginButton;
