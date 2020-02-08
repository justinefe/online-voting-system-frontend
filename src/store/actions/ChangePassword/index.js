// import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const cleanUpPasswordChangeAction = () => ({ type: 'CHANGE_PASSWORD_CLEAN_UP' });
export const submitPasswordChange = () => ({ type: 'CHANGE_PASSWORD_SUBMIT' });
export const passwordChangeSuccess = message => (
  { type: 'CHANGE_PASSWORD_SUCCESS', change: { message } }
);
export const passwordChangeError = error => (
  { type: 'CHANGE_PASSWORD_ERROR', change: { error } }
);

export const changePasswordAction = payload => async (dispatch) => {
  dispatch(submitPasswordChange(true));
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const result = await axiosCall({ path: `localhost:3020/api/v1/auth/reset_password/${user.uuid}`, payload: { password: payload.password }, method: 'put' });
    dispatch(passwordChangeSuccess(result.message));
  } catch (err) {
    const { response } = err;
    let errorMessage = 'Network or server not responding';
    if(response !== undefined) {
    const { data } = response;
    errorMessage = data.status === 400 ? 'Incorrectly filled details' : data.error;
    }
    // const error = response.data.message || response;
    dispatch(passwordChangeError(errorMessage));
  }
};