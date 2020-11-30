import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const getAuthHeaders = () => ({
  ...headers,
});

const getBaseConfig = (isNeedAuth) => ({
  baseURL: process.env.BACKEND_URL,
  headers: isNeedAuth
    ? getAuthHeaders()
    : headers,
});

export default {
  /**
   * GET
   */

  get: (url, params, isNeedAuth = false) => {
    const config = {
      params: params || {},
      ...getBaseConfig(isNeedAuth),
    };

    return axios.get(url, config);
  },

  /**
   * POST
   */

  post: (url, payload) => {
    const config = getBaseConfig(true);
    return axios.post(url, payload, config);
  },

  /**
   * PUT
   */

  put: (url, payload) => {
    const config = getBaseConfig(true);
    return axios.put(url, payload, config);
  },

  /**
   * DELETE
   */

  delete: (url) => {
    const config = getBaseConfig(true);
    return axios.delete(url, config);
  },
};
