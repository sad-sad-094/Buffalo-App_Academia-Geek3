/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, WelcomeTextContainer, BasicContainer, WelcomeContainer, Button } from "../../Styles/GlobalStyles";

function WelcomePage1() {

  const navigation = useNavigate()

  return (

    <div>
        <BasicContainer>
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660057605/BuffaloApp/Img_Bg1_uhmajl.png" />
        </BasicContainer>
        <WelcomeContainer>
          <WelcomeTextContainer>
            <h1>Workout</h1>
            <p>Start training with usand build muscle or lose weight.</p>
          </WelcomeTextContainer>
          <WelcomeContainer>
            <Button onClick={() => navigation("/welcome2")}>Next</Button>
          </WelcomeContainer>
        </WelcomeContainer>
      </div>
  )

}

export default WelcomePage1;