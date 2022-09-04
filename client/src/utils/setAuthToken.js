// import axios
//  set and delete authorization header fro axios requests
// depending on whether user is logged in or not
import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // apply auth token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete the auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;