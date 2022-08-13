/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';

import { PhysicalDetail, PhysicalConatiner, PhysicalTextContainer, MainContainer, PhysicalP,PhysicalTextContainer3, MaleImg} from "../../Styles/GlobalStyles";

function Gender() {



  return (

    <div>
        <PhysicalConatiner>
          <PhysicalDetail src="https://res.cloudinary.com/felixces/image/upload/v1660252724/imagenes%20reto3/Logo_buzzxn.png" />
        </PhysicalConatiner>
        <MainContainer>
        
          <div>
          <PhysicalTextContainer>
            <PhysicalP>Choose gender.</PhysicalP>
          </PhysicalTextContainer>
         
          </div>
          <div>
        
          <MaleImg src="https://res.cloudinary.com/felixces/image/upload/v1660320316/imagenes%20reto3/male_ymovcg.png" alt="" />
          <PhysicalTextContainer3>
            <PhysicalP>Male.</PhysicalP>
          </PhysicalTextContainer3>
       
          </div>
          <div>
          <MaleImg src="https://res.cloudinary.com/felixces/image/upload/v1660320308/imagenes%20reto3/female_phooxn.png" alt="" />
          <PhysicalTextContainer3>
            <PhysicalP>Female.</PhysicalP>
          </PhysicalTextContainer3>
         
          </div>
          
        </MainContainer>
      </div>
  )

}
export default Gender;