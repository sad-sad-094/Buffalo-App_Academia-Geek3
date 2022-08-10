/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingContainer, LandingImg } from "../../Styles/GlobalStyles";


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
