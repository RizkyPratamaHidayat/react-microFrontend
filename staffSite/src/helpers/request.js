import Wrap from './axiosWrapper';

export const getStaff = (url, data = {}) => {
  return Wrap({
    url,
    method: 'GET',
    data,
  });
};
