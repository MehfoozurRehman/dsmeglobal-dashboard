import Axios from "axios";

export const RegisterAdmin = (data) => {
  // console.log("url", process.env.REACT_APP_API_URL + "/api/Account/Login")
  return Axios.post(process.env.REACT_APP_API_URL + "/api/systemuser/UserLogin", data);
};