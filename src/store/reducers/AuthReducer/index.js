import { authState } from '../initialState';


const AuthReducer = (state = authState, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCES':
            // console.log('Signup succes');
            return {
                ...state,
                ...action.changesToState
            };
        case 'SIGNUP_PENDING':
            // console.log('Signup pending');
            return {
                ...state,
            ...action.changesToState
            };
        case 'SIGNUP_ERROR':
            // console.log('SignUp error');
            return {
                ...state,
                ...action.changesToState
            };
        case 'LOGIN_ERROR':
            // console.log('login error');
            return {
                ...state,
                ...action.changesToState
            };
        case 'LOGIN_SUCCESS':
            // console.log('Login success');
            return {
                ...state,
                ...action.changesToState
            }; 
        case 'LOGIN_PENDING':
                // console.log('Login pending');
                return {
                    ...state,
                ...action.changesToState
                };
        case 'CLEAN_UP':
                // console.log('clean up');
                return {
                    ...state,
                    isCompleted: false,
                    authError: null
                };
        case 'LOG_USER':
            // console.log('Logout success');
                return {
                  ...state,
                  ...action.changesToState,
                };
        case 'LOGOUT_ERROR':
                // console.log('Logout Error');
                return state;
        default:
            return state;
    }
};

export default AuthReducer;