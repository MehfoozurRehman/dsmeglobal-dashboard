import Axios from "axios";

export const GetAllInvestor = () => {
  // console.log("url", process.env.REACT_APP_API_URL + "/api/Account/Login")
  return Axios.get(process.env.REACT_APP_API_URL + "api/User/GetAllInvestor");
};