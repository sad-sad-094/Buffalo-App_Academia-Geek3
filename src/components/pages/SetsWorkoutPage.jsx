/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, ButtonF5, EnterDay6, TitleVideo, PhysicalP2, TitleVideo1, SetTitle, Videos, SetConatiner, PhysicalTextContainer4 } from "../../Styles/GlobalStyles";
import ComeBackButton from '../modules/BackButton';
import { db } from '../../utils/Firebase';
import { useDispatch } from 'react-redux';
import { actionTimeStart, actionTimeEnd } from '../../Redux/Actions/Actions';



function SetsWorkout() {

  const navigation = useNavigate();
  const [videoUrl, setVideoUrl] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    db.collection('VideosData').doc('videos').get() //get la base de datos
      .then(doc => {
        setVideoUrl(doc.data().url);
        let actionStart = Object.assign({}, actionTimeStart)
        actionStart.payload = {start: new Date()}
        dispatch(actionStart);
      })
  });



  return (

    <MainContainer>

      <ComeBackButton style={{ marginBottom: '2rem' }} back={() => navigation('/days')} />

      <SetConatiner>
        <Videos title='' src={videoUrl} />
      </SetConatiner>

      <TitleVideo>
        <PhysicalP2>3 set</PhysicalP2>
        <PhysicalP2>12 reps</PhysicalP2>
      </TitleVideo>


      <PhysicalTextContainer4>

        <form action="">

          <TitleVideo1 style={{ margin: '0.5rem auto' }}>
            <SetTitle>Set 1</SetTitle>
            <EnterDay6 type="text" placeholder='reps' />
            <EnterDay6 type="text" placeholder='kilograms' />
          </TitleVideo1>

          <TitleVideo1 style={{ margin: '0.5rem auto' }}>
            <SetTitle>Set 2</SetTitle>
            <EnterDay6 type="text" placeholder='reps' />
            <EnterDay6 type="text" placeholder='kilograms' />
          </TitleVideo1>

          <TitleVideo1 style={{ margin: '0.5rem auto' }}>
            <SetTitle>Set 3</SetTitle>
            <EnterDay6 type="text" placeholder='reps' />
            <EnterDay6 type="text" placeholder='kilograms' />
          </TitleVideo1>

        </form>

        <ButtonF5 onClick={() => {
          let actionEnd = Object.assign({}, actionTimeEnd)
          actionEnd.payload = {end: new Date()}
          dispatch(actionEnd);
          navigation("/resume")
        }}>Finish exercise</ButtonF5>

      </PhysicalTextContainer4>


    </MainContainer>

  )

}
export default SetsWorkout;