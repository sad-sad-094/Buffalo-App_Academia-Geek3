/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


const actionLogin = {
  type: '@user/login',
  payload: {}
}

const actionPhyData = {
  type: '@user/setphysicaldata',
  payload: {}
}

const actionGenderData = {
  type: '@user/setgender',
  payload: {}
}

export { actionLogin, actionPhyData, actionGenderData };
