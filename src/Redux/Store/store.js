

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
        //TODO agregar reducers
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))