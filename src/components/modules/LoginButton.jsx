/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React from 'react'
import { Button } from '../../Styles/GlobalStyles';
=======
E-mail: sadw621@gmail.com -  */


import React from 'react'
import { Button } from '../../styles/GlobalStyles';
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

function LoginButton(props) {

  return (

    <Button onClick={props.login} type="button">Login</Button>

  )

}

export default LoginButton;
