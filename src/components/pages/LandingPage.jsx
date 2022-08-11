/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */
=======
E-mail: sadw621@gmail.com -  */
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0


import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { LandingContainer, LandingImg } from '../../Styles/GlobalStyles';
=======
import { LandingContainer, LandingImg } from "../../Styles/GlobalStyles";
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0


function Landing() {

  const navigation = useNavigate()

  setTimeout(() => navigation('/welcome1'), 6000)

  return (

    <div>
      <LandingContainer>
        <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660057604/BuffaloApp/Logo_r0m9rs.png" />
      </LandingContainer>
    </div>

  )

}

export default Landing;
