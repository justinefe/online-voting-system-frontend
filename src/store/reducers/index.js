import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import changePassword from './ChangePassword';
import resetPassword from './ResetPasswordLink';




const rootReducer = combineReducers({ 
    auth: authReducer,
    changePassword,
    resetPassword,
 });

 export default rootReducer;