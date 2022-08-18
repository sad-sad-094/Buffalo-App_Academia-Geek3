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

let defaultTimer = {
  start: 0,
  end: 0,
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

const timerReducer = (state = defaultTimer, action) => {
  switch (action.type) {
    case '@activity/start':
      return {...state, start: action.payload.start};
    case '@activity/end':
      return {...state, end: action.payload.end};
    default:
      return state;
  }
}



export { loginReducer, physicalReducer, timerReducer };
