/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhysicalDetail, PhysicalConatiner, ButtonF, MainContainer, PhysicalP, PhysicalTextContainer4, SuscriptP, EnterD4, ButtonF2, PhysicalTextContainer5 } from "../../Styles/GlobalStyles";

function Suscription() {

  const navigation = useNavigate()

  return (

    <div>
      <PhysicalConatiner>
        <PhysicalDetail src="https://res.cloudinary.com/felixces/image/upload/v1660252724/imagenes%20reto3/Logo_buzzxn.png" />
      </PhysicalConatiner>
      <MainContainer>

        <div>
          <PhysicalTextContainer4>
            <PhysicalP>Choose a subscription.</PhysicalP>
            <SuscriptP>We believe that our application will help you achieve your goals</SuscriptP>
          </PhysicalTextContainer4>
          <EnterD4 type="text" placeholder='Mountly                                                              8.99 usd ' />
        </div>
        <div>
          <ButtonF2 OnClick={() => navigation("/gender")}>Early.......................................... 9.45 usd</ButtonF2>
        </div>


        <PhysicalTextContainer5>
          <ButtonF onClick={() => navigation("/days")}>Next</ButtonF>
        </PhysicalTextContainer5>
      </MainContainer>
    </div>
  )

}
export default Suscription;