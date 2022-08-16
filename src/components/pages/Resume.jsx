/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer,SetConatiner, DaysImg, PhysicalTextContainer4, DaysP, DayB3, DayConte, ResumeConte, Star, ButtonResume } from "../../Styles/GlobalStyles";

function Resume() {

  const navigation = useNavigate()

  return (
    <div>
      <SetConatiner>
        <DaysImg src="https://res.cloudinary.com/felixces/image/upload/v1660516322/imagenes%20reto3/Img_vkko0t.png" />
      </SetConatiner>
      <PhysicalTextContainer4>
        <DaysP>Split 3 days.</DaysP>
        <DayConte>
          <DayB3 type="submit">Day 1</DayB3>
          <DayB3 type="submit">Day 2</DayB3>
          <DayB3 type="submit">Day 3</DayB3>
        </DayConte>
      </PhysicalTextContainer4>
      <MainContainer>
        <ResumeConte>
          <table>
           
            <tr>
              <td>Total time</td>
              <td></td>
              <td>5412</td>
            </tr>
            <tr>
              <td>Start time</td>
              <td></td>
              <td>12:23</td>
            </tr>
            <tr>
              <td>End time</td>
              <td></td>
              <td>13:11</td>
            </tr>
            <tr>
              <td>Calories burned</td>
              <td></td>
              <td>546</td>
            </tr>
           
            <tr>
            <td></td>
            <td>Appreciate your tiredness</td>
            </tr>
            <tr></tr>
            <tr>
            <td></td>
            
            <td>
            <Star  src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
            <Star  src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
            <Star  src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
            <Star  src="https://res.cloudinary.com/felixces/image/upload/v1660610467/imagenes%20reto3/estrella_rv4rsk.png" alt="" />
            <Star  src="https://res.cloudinary.com/felixces/image/upload/v1660610467/imagenes%20reto3/estrella_rv4rsk.png" alt="" />
            </td>
            </tr>
          </table>
        </ResumeConte>
        <ButtonResume onClick={() => navigation("/sets")}> Save</ButtonResume>
      </MainContainer>
    </div>
  );

}
export default Resume;