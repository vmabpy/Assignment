import axios from "axios";
import { AsyncStorage } from "react-native";
import configs from "./configs";

const request = axios.create();

// request.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';
request.defaults.timeout = 50000;

if (process.env.NODE_ENV === "production") {
  request.defaults.baseURL = configs.SERVER_PRODUCTION_URL;
} else if (process.env.NODE_ENV === "staging") {
  request.defaults.baseURL = configs.SERVER_STAGING_URL;
} else {
  request.defaults.baseURL = configs.SERVER_DEVELOPMENT_URL;
}

request.interceptors.request.use(async (config) => {
  const accessToken = await getToken();
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
  return config;
});
request.interceptors.response.use(
  (response) => {
    if (response.status_code) {
      return Promise.reject({ code: 400, message: response.messages });
    }
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject({
        code: error.response.data.status_code,
        message: error.response.data.message,
      });
    }
    if (error.request) {
      return Promise.reject({ message: "No response was received" });
    }
    return Promise.reject(error);
  }
);

const setToken = (token) => {
  request.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  let user = await AsyncStorage.getItem("user");
  try {
    user = JSON.parse(user);
    return user.token;
  } catch (err) {
    return undefined;
  }
};

export { request, setToken };
