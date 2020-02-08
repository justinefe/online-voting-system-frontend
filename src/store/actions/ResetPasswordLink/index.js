import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';

export const cleanUpResetAction = () => ({ type: 'RESET_CLEAN_UP' });
export const submitReset = () => ({ type: 'RESET_SUBMIT' });
export const resetSuccess = message => ({ type: 'RESET_SUCCESS', reset: { message } });
export const resetError = error => ({ type: 'RESET_ERROR', reset: { error } });

export const sendResetLinkAction = payload => async (dispatch) => {
  dispatch(cleanUpResetAction());
  dispatch(submitReset(true));
  try {
    const result = await axiosCall({ path: '/api/v1/auth/forgot_password', payload, method: 'post' });
    toast('Password reset link is sent to your email', 'success');
    dispatch(resetSuccess(result.message));
  } catch (err) {
    const { response } = err;
    let errorMessage = 'Network or server not responding';
    if(response !== undefined) {
    const { data } = response;
    errorMessage = data.status === 400 ? 'Incorrectly filled details' : data.error
    }
    dispatch(resetError(errorMessage));
  }
};
