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

let defaultPhyData = {
  height: 0,
  weight: 0,
  age: 0,
  gender: "",
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

const physicalReducer = (state = defaultPhyData, action) => {
  switch (action.type) {
    case '@user/setphysicaldata':
      return {...action.payload, gender:""};
    case '@user/setgender':
      return {...state, gender: action.payload.gender};
    default:
      return state;
  }
}



export { loginReducer, physicalReducer };
