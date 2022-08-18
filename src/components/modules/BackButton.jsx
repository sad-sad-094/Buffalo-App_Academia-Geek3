/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import React from 'react';
import { ComeBackButton } from '../../Styles/GlobalStyles';
import { BsArrowLeft } from 'react-icons/bs'


function BackButton(props) {
  

  return (

    <ComeBackButton onClick={props.back} type="button"><BsArrowLeft size={24} /></ComeBackButton>

  )

}

export default BackButton;
