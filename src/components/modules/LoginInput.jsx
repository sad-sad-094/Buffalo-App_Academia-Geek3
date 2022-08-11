<<<<<<< HEAD
/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { Input } from '../../Styles/GlobalStyles';
=======
/* Author: Sebastian Aguirre Duque - José Félix Cespedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { Input } from '../../styles/GlobalStyles';
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

function LoginInput(props) {

  const setUser = (event) => {
    props.loginSetUser({
      ...props.loginUser,
      [event.target.name]: event.target.value,
    })
  }

    return (

      <form onChange={setUser}>
        <Input type="email" placeholder="Enter your email" name="email" required></Input>
        <Input type="password" placeholder="Enter your password" name="password" required></Input>
      </form>

    ) 

}

export default LoginInput;

