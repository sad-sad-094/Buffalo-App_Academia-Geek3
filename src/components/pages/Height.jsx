/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, PhysicalTextContainer2, ButtonF, MainContainer, PhysicalP, EnterD, PhysicalTextContainer3, EnterD2 } from "../../Styles/GlobalStyles";

function Height() {

  const navigation = useNavigate()

  return (

    <div>
        <PhysicalConatiner>
          <PhysicalDetail src="https://res.cloudinary.com/felixces/image/upload/v1660252724/imagenes%20reto3/Logo_buzzxn.png" />
        </PhysicalConatiner>
        <MainContainer>
        
          <div>
          <PhysicalTextContainer>
            <PhysicalP>Enter your height.</PhysicalP>
          </PhysicalTextContainer>
          <EnterD type="text"   />
          </div>
          <div>
          <PhysicalTextContainer3>
            <PhysicalP>Enter your weight.</PhysicalP>
          </PhysicalTextContainer3>
          <EnterD2 type="text"   />
          </div>
          <div>
          <PhysicalTextContainer3>
            <PhysicalP>Enter your age.</PhysicalP>
          </PhysicalTextContainer3>
          <EnterD2 type="text"   />
          </div>
          
          <PhysicalTextContainer2>
            <ButtonF OnClick={() => navigation("/gender")}>Next</ButtonF>
          </PhysicalTextContainer2>
        </MainContainer>
      </div>
  )

}
export default Height;