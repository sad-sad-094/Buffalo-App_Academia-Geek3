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
<<<<<<< HEAD
            <Button OnClick={() => navigation('/welcome2')}>Next</Button>
=======
            <Button OnClick={() => navigation("/welcome2")}>Next</Button>
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
          </WelcomeContainer>
        </WelcomeContainer>
      </div>
  )

}

export default WelcomePage1;