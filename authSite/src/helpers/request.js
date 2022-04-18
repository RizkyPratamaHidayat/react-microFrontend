import Wrap from './axiosWrapper';

export const login = (url, data = {}) => {
  return Wrap({
    url,
    method: 'POST',
    data,
  });
};
