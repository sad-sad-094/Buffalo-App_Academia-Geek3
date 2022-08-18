/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, PhysicalTextContainer4, DaysConatiner, DaysImg, DaysP, DayConte, DayB3, EnterDay2, ButtonDay } from "../../Styles/GlobalStyles";
import ComeBackButton from '../modules/BackButton';


function Days() {

  const navigation = useNavigate()

  return (

    <MainContainer>

      <ComeBackButton back={() => navigation('/home')} />

      <DaysConatiner>
        <DaysImg src="https://res.cloudinary.com/felixces/image/upload/v1660516322/imagenes%20reto3/Img_vkko0t.png" />
      </DaysConatiner>

      <PhysicalTextContainer4>
        <DaysP>Split 3 days.</DaysP>
        <DayConte>
          <DayB3 onClick={() => navigation("/sets")} type='submit'>Day 1</DayB3>
          <DayB3 onClick={() => navigation("/sets")} type='submit'>Day 2</DayB3>
          <DayB3 onClick={() => navigation("/sets")} type='submit'>Day 3</DayB3>
        </DayConte>
      </PhysicalTextContainer4>

      <PhysicalTextContainer4>

        <form action="">
          <EnterDay2 type="text" placeholder=' 1. Pull ups.' />
          <EnterDay2 type="text" placeholder=' 2. Reverse pull-up.' />
          <EnterDay2 type="text" placeholder=' 3. Bicep curl.' />
          <EnterDay2 type="text" placeholder=' 4. Lifting dumbbells in front of you.' />
          <EnterDay2 type="text" placeholder=' 5. Curls for biceps on the bench.' />
          <EnterDay2 type="text" placeholder=' 6. Bent over row.' />
          <EnterDay2 type="text" placeholder=' 7. Horizontal block pull.' />
          <EnterDay2 type="text" placeholder=' 8. One arm dumbbell row.' />
        </form>

      </PhysicalTextContainer4>

      <ButtonDay onClick={() => navigation("/sets")}>Finish Early</ButtonDay>


    </MainContainer>
  )

}


export default Days;
