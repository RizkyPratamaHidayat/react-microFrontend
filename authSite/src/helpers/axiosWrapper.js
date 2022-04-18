import axios from 'axios';
import {MAIN_URL} from '../shared/constants.js';

const request = async function (options) {
  const requestHeaders = options.customHeaders || {
    'Content-type': 'application/json',
    Accept: 'application/json',
  };
  // let tokenParam = {
  //   "x-access-token": "Bearer " + localStorage.getItem('access-token')
  // }
  const client = axios.create({
    baseURL: options.MAIN_URL || MAIN_URL,
    // headers: {...requestHeaders, ...tokenParam}
  });
  const onSuccess = function (response) {
   //   return new Promise(async(resolve)=>{
   //     const responses =  await response.data;
   //  }) 
       return response.data;
  };

  const onError = function (error) {
    console.log('Request Failed:', error);
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError)
};

export default request;
