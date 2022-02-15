import { useDispatch, useSelector } from "react-redux";

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }

  const OtpHeader = () => {
      const user = JSON.parse(localStorage.getItem('otp'));
      if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
      } else {
        return {};
      }
    }

    export default {
      authHeader,
      OtpHeader,
      
    };