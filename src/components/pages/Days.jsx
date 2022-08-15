/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer,PhysicalTextContainer4,DaysConatiner, DaysImg, DaysP, DayConte, DayB3, EnterDay, EnterDay2, ButtonDay } from "../../Styles/GlobalStyles";

function Days() {

  const navigation = useNavigate()

  return (

    <div>
        <DaysConatiner>
          <DaysImg src="https://res.cloudinary.com/felixces/image/upload/v1660516322/imagenes%20reto3/Img_vkko0t.png" />
        </DaysConatiner>
        <MainContainer>
        
          <div>
          <PhysicalTextContainer4>
            <DaysP>Split 3 days.</DaysP>
            <DayConte>
            <DayB3 type='submit'>Day 1</DayB3>
            <DayB3 type='submit'>Day 2</DayB3>
            <DayB3 type='submit'>Day 3</DayB3>
            </DayConte>
          </PhysicalTextContainer4>
          <form action="">
          <EnterDay type="text" placeholder=' 1 Pull ups                                                                  ✔' />
          <EnterDay2 type="text" placeholder=' 2 Reverse pull-up                                                      ✔' />
          <EnterDay2 type="text" placeholder=' 3 Bicep curl                                                               ✔' />
          <EnterDay2 type="text" placeholder=' 4 Lifting dumbbells in front of you                             ✔' />
          <EnterDay2 type="text" placeholder=' 5 Curls for biceps on the bench                                ✔' />
          <EnterDay2 type="text" placeholder=' 6 Bent over row                                                         ✔' />
          <EnterDay2 type="text" placeholder=' 7 Horizontal block pull                                               ✔' />
          <EnterDay2 type="text" placeholder=' 8 One arm dumbbell row                                           ✔' />
        
          <ButtonDay OnClick={() => navigation("/sets")}>Finish Early</ButtonDay>
          </form>
          </div>
         

        </MainContainer>
      </div>
  )

}
export default Days;