import React, { useState } from "react";
import sideimg from "../icon/Side Image.png";
import { useFirst } from "../Context/Context";

const Login = () => {
  const { login, logout, isAuthenticated } = useFirst();
  const [userData, setuserData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    await login(userData);
  };
  return (
    <div className="flex gap-2 pt-[50px] pb-[100px]">
      <img src={sideimg} alt="" />
      <div className="m-[200px]">
        <div className="text-[36px]">Login To Exclusive</div>
        <div>Enter your details below </div>
        <div className="flex flex-col gap-7 mt-[24px]">
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              name="email"
              className="border-b outline-none border-b-gray-500 mt-[20px] w-[300px]"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="border-b outline-none border-b-gray-500 w-[300px]"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex mt-[50px] justify-between">
          <div
            className="btn bg-red-400 px-[48px] py-[16px] rounded-[5px] text-white "
            onClick={handleLogin}
          >
            Login
          </div>
          <div className="text-red-400 flex justify-center items-center">
            Forgot Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
