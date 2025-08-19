import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [userRole, setuserRole] = useState("USER"); //admin and user role
  const [isAuthenticated, setisAuthenticated] = useState();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const localdata = localStorage.getItem("Authenticated");
  //   // console.log("localdata");
  //   if (localdata) {
  //     setisAuthenticated(localdata);
  //   } else {
  //     setisAuthenticated(false);
  //   }
  // }, []);
  // const login = () => {
  //   setisAuthenticated(true);
  //   // console.log(isAuthenticated);
  //   // if (isAuthenticated == true) {
  //   //   navigate("/");
  //   //   setisAuthenticated(false);
  //   // } else {
  //   //   navigate("/Login");
  //   // }
  //   if(userRole==="Admin"){
  //     navigate("/defnotadmin")

  //   }
  //   navigate("/")
  //   localStorage.setItem("Authenticated", isAuthenticated);
  // };
  const login = async (userData) => {
    try {
      const loginreq = await axios.post(
        "http://localhost:8080/api/user/login",
        userData
      );
      setisAuthenticated(true);
      toast.success(loginreq.data.message);
      navigate("/")
      console.log(loginreq);
    } catch (e) {
      toast.error(e.response.data.message);
      console.log(e);
    }
  };
  const logout = () => {
    setisAuthenticated(false);
    localStorage.removeItem("Authenticated");
  };
  return (
    <Context.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </Context.Provider>
  );
};
export const useFirst = () => {
  const context = useContext(Context);
  if (!context) throw Error("cannot be used without the provider");
  return context;
};
export default ContextProvider;
