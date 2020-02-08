// import * as types from '../../actions/actionTypes';
import { changePassword } from '../initialState';

// const AuthReducer = (state = authState, action) => {

const changePasswordReducer = (state = changePassword, action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_SUCCESS':
      return { 
         ...state,
         response: action.change, 
         isSubmitting: false
         };
    case 'CHANGE_PASSWORD_ERROR':
      return { 
        ...state, 
        response: action.change,
        isSubmitting: false
         };
    case 'CHANGE_PASSWORD_SUBMIT':
      return { 
        ...state,
        isSubmitting: true
       };
    case 'CHANGE_PASSWORD_CLEAN_UP':
      return { 
        ...state, 
        ...changePassword };
    default:
      return state;
  }
};

export default changePasswordReducer;