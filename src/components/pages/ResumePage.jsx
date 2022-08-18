/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer, SetConatiner, DaysImg, PhysicalTextContainer4, DaysP, DayB3, DayConte, ResumeConte, Star, ButtonResume } from "../../Styles/GlobalStyles";
import ComeBackButton from '../modules/BackButton';

function Resume() {

  const navigation = useNavigate()
  const selector = useSelector(state => state.activityTimer);

  return (

    <MainContainer>

      <ComeBackButton styled={{margin: '1rem auto', justifyContent: 'center'}} back={() => navigation('/sets')} />

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
              <td>{Math.round(((selector.end.getTime() - selector.start.getTime()) / 1000)) /100} m</td>
            </tr>
            <tr>
              <td>Start time</td>
              <td></td>
              <td>{('0'+selector.start.getHours()).slice(-2) }:{('0'+selector.start.getMinutes()).slice(-2)} hm</td>
            </tr>
            <tr>
              <td>End time</td>
              <td></td>
              <td>{('0'+selector.end.getHours()).slice(-2) }:{('0'+selector.end.getMinutes()).slice(-2)} hm</td>
            </tr>
            <tr>
              <td>Calories burned</td>
              <td></td>
              <td>2000Kc</td>
            </tr>

            <tr>
              <td></td>
              <td>Appreciate your tiredness</td>
            </tr>
            <tr></tr>
            <tr>
              <td></td>

              <td>
                <Star src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
                <Star src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
                <Star src="https://res.cloudinary.com/felixces/image/upload/v1660611215/imagenes%20reto3/estrellaazul_kopots.png" alt="" />
                <Star src="https://res.cloudinary.com/felixces/image/upload/v1660610467/imagenes%20reto3/estrella_rv4rsk.png" alt="" />
                <Star src="https://res.cloudinary.com/felixces/image/upload/v1660610467/imagenes%20reto3/estrella_rv4rsk.png" alt="" />
              </td>
            </tr>
          </table>
        </ResumeConte>

        <ButtonResume onClick={() => navigation("/home")}> Save</ButtonResume>

      </MainContainer>

    </MainContainer>
  );

}
export default Resume;