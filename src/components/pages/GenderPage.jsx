/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, MainContainer, PhysicalP, MaleImg, PhysicalTextContainer2, ButtonF } from "../../Styles/GlobalStyles";
import { useDispatch } from 'react-redux';
import { actionGenderData } from '../../Redux/Actions/Actions';


function Gender() {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [userGender, setUserGender] = useState("");

  const nextStep = () => {

    let action = Object.assign({}, actionGenderData)
    action.payload = { gender: userGender }
    dispatch(action);
    console.log(action);

    navigation("/home");

  }

  return (

    <>
      <PhysicalConatiner>
        <PhysicalDetail src="https://res.cloudinary.com/felixces/image/upload/v1660252724/imagenes%20reto3/Logo_buzzxn.png" />
      </PhysicalConatiner>

      <MainContainer>

        <PhysicalTextContainer>
          <PhysicalP>Choose gender.</PhysicalP>
        </PhysicalTextContainer>

        <MaleImg src="https://res.cloudinary.com/felixces/image/upload/v1660320316/imagenes%20reto3/male_ymovcg.png" alt="" onClick={() => setUserGender('male')} />
        <PhysicalTextContainer>
          <PhysicalP>Male.</PhysicalP>
        </PhysicalTextContainer>

        <MaleImg src="https://res.cloudinary.com/felixces/image/upload/v1660320308/imagenes%20reto3/female_phooxn.png" alt="" onClick={() => setUserGender('female')} />
        <PhysicalTextContainer>
          <PhysicalP>Female.</PhysicalP>
        </PhysicalTextContainer>

        <PhysicalTextContainer2>
          <ButtonF onClick={nextStep}>Next</ButtonF>
        </PhysicalTextContainer2>

      </MainContainer>
    </>
  )

}

export default Gender;