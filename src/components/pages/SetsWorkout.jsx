/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer,DaysConatiner, DaysImg,ButtonF5, EnterDay6,TitleVideo, PhysicalP2, TitleVideo1, SetTitle } from "../../Styles/GlobalStyles";

function SetsWorkout() {

  const navigation = useNavigate()

  return (

    <div>
        <DaysConatiner>
          <DaysImg src="https://res.cloudinary.com/felixces/image/upload/v1660516322/imagenes%20reto3/Img_vkko0t.png" />
        </DaysConatiner>
        <TitleVideo>
        <PhysicalP2>3 set</PhysicalP2>
        <PhysicalP2>12 repetitions</PhysicalP2>
        </TitleVideo>
        <MainContainer>
        
          <div>
          
          <form action="">
            <TitleVideo1>
          <SetTitle>Set 1</SetTitle><EnterDay6 type="text" placeholder='repetitions'/><EnterDay6 type="text" placeholder='kilogramans'/>
          </TitleVideo1>
          <TitleVideo1>
          <SetTitle>Set 2</SetTitle><EnterDay6 type="text" placeholder='repetitions'/><EnterDay6 type="text" placeholder='kilogramans'/>
          </TitleVideo1> 
          <TitleVideo1>
          <SetTitle>Set 3</SetTitle><EnterDay6 type="text" placeholder='repetitions'/><EnterDay6 type="text" placeholder='kilogramans'/>
          </TitleVideo1>                                                           
                                         
        
          <ButtonF5 OnClick={() => navigation("/sets")}>Finish the exercise</ButtonF5>
          </form>
          </div>
         

        </MainContainer>
      </div>
  )

}
export default SetsWorkout;