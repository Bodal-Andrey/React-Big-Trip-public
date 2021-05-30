import axios from "axios";

export const createApi = (onError) => {
  const api = axios.create({
    baseURL: `https://13.ecmascript.pages.academy/big-trip`,
    headers: {'Authorization': `Basic er883jdzbdq`},
  });

  const onSuccess = (response) => {
    return response.data;
  };

  const onFail = (err) => {
    if (err.response) {
      throw err;
    }
    onError(err);
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
