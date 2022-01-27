import Axios from "axios";

export const GetAllStartup = () => {
  return Axios.get(process.env.REACT_APP_API_URL + "api/User/GetAllStartup");
};