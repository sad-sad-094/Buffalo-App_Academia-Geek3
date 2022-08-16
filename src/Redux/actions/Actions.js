/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */
const actionLoginSync = (email, pass)=>{
  return {
      type: 'typesLogin.verificarLogin',
      payload:{
          email, pass
      }
  }
}

const actionLogin = {
  type: '@user/login',
  payload: {}
}

export {actionLogin, actionLoginSync }
