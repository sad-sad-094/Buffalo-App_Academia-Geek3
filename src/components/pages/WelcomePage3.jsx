/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer, Button } from '../../Styles/GlobalStyles';
=======
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer, Button } from "../../Styles/GlobalStyles";
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0

function WelcomePage3() {

  const navigation = useNavigate()

  return (

    <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660057605/BuffaloApp/Img_Bg3_wntkew.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>Character</h1>
            <p>Cultivate in you an iron character for training.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
<<<<<<< HEAD
            <Button OnClick={() => navigation('/login')}>Next</Button>
=======
            <Button OnClick={() => navigation("/login")}>Next</Button>
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
          </WelcomeContainer>
        </WelcomeContainer>
      </div>
  )

}

export default WelcomePage3;
