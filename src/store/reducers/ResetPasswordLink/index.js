// import * as types from '../../actions/actionTypes';
import { resetPassword } from '../initialState';

const restPasswordReducer = (state = resetPassword, action) => {
  switch (action.type) {
    case 'RESET_SUCCESS':
      return { 
        ...state,
        response: action.reset,
        isSubmitting: false
       };
    case 'RESET_ERROR':
      return { 
        ...state, 
        response: action.reset, 
        isSubmitting: false
       };
    case 'RESET_SUBMIT':
      return { 
        ...state,
         isSubmitting: true
         };
    case 'RESET_CLEAN_UP':
      return { 
        ...state, 
        ...resetPassword };
    default:
      return state;
  }
};

export default restPasswordReducer;
