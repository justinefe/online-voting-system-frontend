import axios from 'axios';
import Cryptr from 'cryptr';
import toast from '../components/Toast';


export const clearLocalStorage = () => {
  localStorage.clear();
};


export const axiosCall = async ({
    path, payload, method, contentType
  }) => {
    const url = `https://voting-system-backend.herokuapp.com${path}`;
    const headers = {
      'x-access-token': localStorage.token,
      'Content-Type': contentType || 'application/json',
    };
    const axiosdata = {
      method,
      url,
      data: payload,
      headers,
      json: true,
    };
  
    try {
      const result = await axios(axiosdata);
      const { data } = result;
      return data;
    } catch (error) {
      // const { response } = error;
        toast('Network Error', 'error');
      throw error;
    }
  };
  
  
export const saveToLocalStorage = (user) => {
    if (user) {
      const token = user.token || localStorage.getItem('token');
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      token ? localStorage.setItem('isAuthenticated', true) : '';
    }
 };

 export const decryptQuery = (string) => {
  const cryptr = new Cryptr('justin');
  const decryptedString = cryptr.decrypt(string);
  return decryptedString;
};

  