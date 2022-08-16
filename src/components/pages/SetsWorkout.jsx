/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com -  */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer,DaysConatiner, ButtonF5, EnterDay6,TitleVideo, PhysicalP2, TitleVideo1, SetTitle, Videos, SetConatiner } from "../../Styles/GlobalStyles";

function SetsWorkout() {

  const navigation = useNavigate()

  return (

    <div>
        <SetConatiner>
        <Videos title='' src='https://www.youtube.com/embed/L_W4F6_c2Jg'/>
        </SetConatiner>
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