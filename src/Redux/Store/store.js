/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { loginReducer, physicalReducer, timerReducer } from '../Reducers/Reducers';


const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  combineReducers(
    {
      userLogin: loginReducer,
      physicalData: physicalReducer,
      activityTimer: timerReducer
    }
  ), r(applyMiddleware())
)

export default Store
