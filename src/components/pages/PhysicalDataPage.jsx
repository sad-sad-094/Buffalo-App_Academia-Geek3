/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, PhysicalTextContainer2, ButtonF, PhysicalP, EnterD, MainContainerF } from "../../Styles/GlobalStyles";
import { useDispatch } from 'react-redux';
import { actionPhyData } from '../../Redux/Actions/Actions';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '../../utils/Firebase';

function Height() {

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userIdSelector = useSelector(state => state.userLogin.id);

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

    db.collection('userData').doc(userIdSelector).update({ height: defaultPhyData.height, weight: defaultPhyData.weight, age: defaultPhyData.age })
      .then(() => { //Then no tiene response porque pasa sin dar respueste => status 204
        toast.success('Data seted correctly.');
        navigation("/gender");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        toast.warn("Error updating data: ", error);
        navigation("/login")
      });

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