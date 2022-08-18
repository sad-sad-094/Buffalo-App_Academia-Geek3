/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer,PhysicalTextContainer4, DayB3,ResumeConte, Star, ButtonResume, EditImg, EditP, EditConte, EditContain, PhysicalTextContainer, PhysicalP, EnterD, PhysicalTextContainer3, EnterD2, EditContain2, EnterEdit, EnterDay, EnterDay2, EnterE, ButtonE, ImgIn, ImgInput, ConteImg } from "../../Styles/GlobalStyles";

function EditUser() {

  const navigation = useNavigate()

  return (
    <div>
     
      <EditConte>
      <EditP>Account</EditP>
        <EditImg src="https://res.cloudinary.com/felixces/image/upload/v1660775951/imagenes%20reto3/editada_1_iwurop.jpg" />
      </EditConte>
      <PhysicalTextContainer4>
        <form action="">
        <EditContain2>
        <ConteImg>
          <EnterEdit type="text"  placeholder='28'  />
          <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789572/imagenes%20reto3/pesa_gw0jh1.png" alt="" />
        </ConteImg>
        <ConteImg>
        <EnterEdit type="text"  placeholder='178'  />
        <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789565/imagenes%20reto3/estatura_jncoct.png" alt="" />
        </ConteImg>
        <ConteImg>
          <EnterEdit type="text"  placeholder='28'  />
          <ImgInput src="https://res.cloudinary.com/felixces/image/upload/v1660789559/imagenes%20reto3/calorias_mydxzp.png" alt="" />
        </ConteImg>
        </EditContain2>
          <EnterE  type="text" placeholder= 'Felix' />
          <EnterE type="text" placeholder='Cespedes'/>
          <EnterE type="text" placeholder='felix@gmail.com'/>
   
        <ButtonE onClick={() => navigation("/sets")}> Save</ButtonE>
      
        </form>
        
      </PhysicalTextContainer4>
      
    </div>
  );

}
export default EditUser;