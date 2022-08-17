/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, PhysicalTextContainer2, ButtonF, PhysicalP, EnterD, MainContainerF } from "../../Styles/GlobalStyles";
import { useDispatch } from 'react-redux';
import { actionPhyData } from '../../Redux/Actions/Actions';

function Height() {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [defaultPhyData, setDefaultPhyData] = useState({
    height: 0,
    weight: 0,
    age: 0,
  });

  const setPhyData = (event) => {
    setDefaultPhyData(
      { ...defaultPhyData, [event.target.name]: parseInt(event.target.value), }
    )
  }

  const nextStep = () => {

    let action = Object.assign({}, actionPhyData)
    action.payload = { height: defaultPhyData.height, weight: defaultPhyData.weight, age: defaultPhyData.age }
    dispatch(action);

    navigation("/gender");
  }

  return (

    <>

      <PhysicalConatiner>
        <PhysicalDetail src="https://res.cloudinary.com/felixces/image/upload/v1660252724/imagenes%20reto3/Logo_buzzxn.png" />
      </PhysicalConatiner>

      <MainContainerF>

          <PhysicalTextContainer>
            <PhysicalP>Enter your height:</PhysicalP>
          </PhysicalTextContainer>
          <EnterD type="number" placeholder="Please, enter your height" name="height" required onChange={setPhyData} />


          <PhysicalTextContainer>
            <PhysicalP>Enter your weight:</PhysicalP>
          </PhysicalTextContainer>
          <EnterD type="number" placeholder="Please, enter your weight" name="weight" required onChange={setPhyData} />


          <PhysicalTextContainer>
            <PhysicalP>Enter your age:</PhysicalP>
          </PhysicalTextContainer>
          <EnterD type="number" placeholder="Please, enter your age" name="age" required onChange={setPhyData} />



        <PhysicalTextContainer2>
          <ButtonF onClick={nextStep}>Next</ButtonF>
        </PhysicalTextContainer2>

      </MainContainerF>

    </>
  )

}
export default Height;