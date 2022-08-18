/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


const actionLogin = {
  type: '@user/login',
  payload: {}
}

const actionLogout = {
  type: '@user/logout',
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

const actionTimeStart = {
  type: '@activity/start',
  payload: {}
}

const actionTimeEnd = {
  type: '@activity/end',
  payload: {}
}

export { actionLogin, actionPhyData, actionGenderData, actionLogout, actionTimeStart, actionTimeEnd };
