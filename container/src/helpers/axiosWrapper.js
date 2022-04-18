import axios from 'axios';
import {MAIN_URL} from './constants';

const request = async function (options) {
  const requestHeaders = options.customHeaders || {
    'Content-type': 'application/json',
    Accept: 'application/json',
  };
  const client = axios.create({
    baseURL: options.MAIN_URL || MAIN_URL
  });
  const onSuccess = function (response) {
   //   return new Promise(async(resolve)=>{
   //     const responses =  await response.data;
   //  }) 
       return response.data;
  };

  const onError = function (error) {
    console.log('Request Failed:', error.config);
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError)
};

export default request;
