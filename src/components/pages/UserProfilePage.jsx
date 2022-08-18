/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, PhysicalTextContainer4, EditImg, EditP, EditConte, EditContain2, EnterEdit, EnterE, ButtonE, ImgInput, ConteImg } from "../../Styles/GlobalStyles";
import {useSelector} from 'react-redux';

function EditUser() {

  const navigation = useNavigate();
  const selector = useSelector(state => {return {userLogin: state.userLogin, userPhyData: state.physicalData}});

  return (

    <MainContainer>

      <EditConte>
        <EditP>Account</EditP>
        <EditImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1660799782/BuffaloApp/User-Profile-Transparent_lfytwr.png" />
      </EditConte>

      <PhysicalTextContainer4>
        <form action="">
          <EditContain2>
            <ConteImg>
              <EnterEdit type="text" placeholder={selector.userPhyData.weight} />
              <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789572/imagenes%20reto3/pesa_gw0jh1.png" alt="" />
            </ConteImg>
            <ConteImg>
              <EnterEdit type="text" placeholder={selector.userPhyData.height} />
              <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789565/imagenes%20reto3/estatura_jncoct.png" alt="" />
            </ConteImg>
            <ConteImg>
              <EnterEdit type="text" placeholder={selector.userPhyData.age} />
              <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789559/imagenes%20reto3/calorias_mydxzp.png" alt="" />
            </ConteImg>
          </EditContain2>
          <EnterE type="text" placeholder={selector.userLogin.name} />
          <EnterE type="text" placeholder={selector.userLogin.email} />

        </form>

        <ButtonE onClick={() => navigation("/home")}> Home </ButtonE>

      </PhysicalTextContainer4>

    </MainContainer>
  );

}
export default EditUser;