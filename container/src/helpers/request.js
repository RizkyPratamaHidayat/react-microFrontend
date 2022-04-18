import Wrap from './axiosWrapper';

export const getUser = (url, params = {}) => {
  return Wrap({
    url,
    method: 'GET',
    params : {...params},
  });
};
