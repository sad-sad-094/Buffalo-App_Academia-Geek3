/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, MainContainer, PhysicalP, MaleImg, PhysicalTextContainer2, ButtonF } from "../../Styles/GlobalStyles";
import { useDispatch, useSelector } from 'react-redux';
import { actionGenderData } from '../../Redux/Actions/Actions';
import { db } from '../../utils/Firebase';
import { toast } from 'react-toastify';


function Gender() {

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userIdSelector = useSelector(state => state.userLogin.id);

  const [userGender, setUserGender] = useState("");

  const nextStep = () => {

    let action = Object.assign({}, actionGenderData)
    action.payload = { gender: userGender }
    dispatch(action);
    console.log(action);

    db.collection('userData').doc(userIdSelector).update({ gender: userGender })
      .then(() => { //Then no tiene response porque pasa sin dar respueste => status 204
        toast.success('Data seted correctly.');
        navigation("/home");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        toast.warn("Error updating data: ", error);
        navigation("/physicaldata")
      });

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