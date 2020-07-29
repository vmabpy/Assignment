import axios from "axios";

export const apiLogin = (username, password) => {
  return axios.post(`https://api.itedu.me/user/login`, {
    email: "nglethimylinh@gmail.com",
    password: "123456789",
    // email: username,
    // password: password,
  });
};
