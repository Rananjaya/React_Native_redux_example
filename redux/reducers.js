import {SET_USER_NAME, SET_USER_AGE,GET_CITIES} from './actions';

const initialSate = {
    name: '',
    age: 0,
    Data: []
}

function userReducer(state = initialSate, action){
   switch(action.type) {
       case SET_USER_NAME:
           return { ...state, name: action.payload}
        case SET_USER_AGE:
            return {...state, age:action.payload}
        case GET_CITIES:
            return {...state, Data:action.payload}
        default:
            return state;
   }
}

export default userReducer;