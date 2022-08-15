/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer, Button } from '../../Styles/GlobalStyles';

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
            <Button onClick={() => navigation("/welcome3")}>Next</Button>
          </WelcomeContainer>
        </WelcomeContainer>
      </div>
  )

}

export default WelcomePage2;
