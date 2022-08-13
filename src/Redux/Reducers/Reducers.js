/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */


let defaultUser = {
  email: "",
  name: "",
  phone: "",
  coins: 0,
  isLogged: false,
  id: "",
}

const loginReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case '@user/login':
      return action.payload;
    case '@user/logout':
      return defaultUser
    default:
      return state;
  }
}



export { loginReducer };
