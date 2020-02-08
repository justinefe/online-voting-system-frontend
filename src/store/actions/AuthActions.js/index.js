import { axiosCall, saveToLocalStorage, clearLocalStorage  } from '../../../utils';
// import toast from '../../../components/Toast';
import toast from '../../../components/Toast';

export const cleanUpAuth = () => ({
    type: 'CLEAN_UP',
    payload: {
      error: null,
      isCompleted: false
    }
  });  
  // export const signUpSuccess = user => ({ type: 'SIGNUP_SUCCESS', payload: { user, isCompleted: true, isAuthenticated: true } });
  // export const signUp = () => ({ type: 'SIGNUP', payload: { isSubmit: true } });
  // export const signUpError = payload => ({ type: 'SIGNUP_ERROR', payload });
  export const setUpUser = changesToState => ({ type: 'LOG_USER', changesToState });
  // export const cleanUpAuth = () => ({ type: 'CLEAN_UP' });
export const onSignInAction = (credentials) => (dispatch) => {
            dispatch({ 
                type: 'LOGIN_PENDING',
                changesToState: {
                   isCompleted: false,
                   isLoading: true,
                }
                });
             axiosCall({ path: '/api/v1/auth/signin', payload:credentials, method: 'post' })
            .then(result => {
                dispatch({ 
                     type: 'LOGIN_SUCCESS',
                     changesToState: {
                        isCompleted: true,
                        isAuthenticated: true,
                        isLoading: false,
                        user: credentials,
                        authError: false,
                     }
                     });
                saveToLocalStorage(result.data);
            }
            )
            .catch((error) => {
                const { response } = error;
                // toast(`${response.data.error}`, 'error');
                dispatch({ 
                    type: 'LOGIN_ERROR',
                    changesToState: {
                        isLoading: false,
                        isCompleted: true,
                        authError: `${response.data.error}`
                    }
                 });
            });      
};

export const signUpUserAction = user => dispatch => {   
            dispatch({ 
              type: 'SIGNUP_PENDING',
              changesToState: {
                isCompleted: false,
                isLoading: true,
              }
              }); 
            axiosCall({ path: '/api/v1/auth/signup', payload: user, method: 'post' })
            .then(result => {
                dispatch({ type: 'SIGNUP_SUCCES',
                          changesToState: {
                            isCompleted: true,
                            isAuthenticated: true,
                            isLoading: false,
                            user,
                            authError: false,
                        } });
                saveToLocalStorage( result.data);
            })
            .catch(error => {
                const { response } = error;
                toast(`${response.data.status}`, 'error');
                dispatch({ type: 'SIGNUP_ERROR',
                          changesToState: {
                            isLoading: false,
                            authError: 'Network Error'
                        }});
       }
 );    
};



export const signOutAction = () => (dispatch) => {
  try {
    axiosCall({ path: '/api/v1/users/signout', method: 'post' });
    clearLocalStorage();
    dispatch(getUser());
  } catch (error) {
    clearLocalStorage();
    dispatch(getUser());
    /* istanbul ignore next */
    const { response } = error;
    /* istanbul ignore next */
    const message = response.data.message || response;
    throw message;
  }
};


export const socialSignInAction = ({ username, token, history }) => async (dispatch) => {
    try {
      await dispatch({ 
        type: 'LOGIN_PENDING',
        changesToState: {
           isCompleted: false,
           isLoading: true,
        }
        });
      const result = await axiosCall({ method: 'get', path: `/api/v1/profiles/${username}` });
      saveToLocalStorage({ ...result.user, token });
      await localStorage.setItem('socialLogin', true);
    //   await dispatch(signInSuccess(result.user));
      history.push('/');
    } catch ({ response }) {
      /* istanbul ignore next */
      const message = response.data.message || response;
      /* istanbul ignore next */
      await  dispatch({ 
        type: 'LOGIN_ERROR',
        changesToState: {
            isLoading: false,
            authError: message
        }
     });
    }
  };
  
  
export const getUser = () => async (dispatch) => {
  /* istanbul ignore next */
  // if (localStorage.token && localStorage.user) {
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (user) {
      const result = await axiosCall({
        method: 'get',
        path: `/api/v1/profiles/${user.username}`,
      });
      const changesToState = {
        user: result.user,
        isAuthenticated: true
      };
      dispatch(setUpUser(changesToState));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw null;
    }
  } catch (error) {
    const changesToState = {
      user: {},
      isAuthenticated: false,
      authError: null,
      isSettingAuth: false,
    };
    dispatch(setUpUser(changesToState));
  }
  // }
};
