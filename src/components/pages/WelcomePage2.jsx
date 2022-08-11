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

function WelcomePage2() {

  const navigation = useNavigate()

  return (

    <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660057605/BuffaloApp/Img_Bg2_jtfmra.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>Discipline</h1>
            <p>Develop discipline in yourself, train everyday.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
<<<<<<< HEAD
            <Button OnClick={() => navigation('/welcome3')}>Next</Button>
=======
            <Button OnClick={() => navigation("/welcome3")}>Next</Button>
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
          </WelcomeContainer>
        </WelcomeContainer>
      </div>
  )

}

export default WelcomePage2;
