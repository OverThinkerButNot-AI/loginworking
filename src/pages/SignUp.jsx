import React, { useState } from "react";
import sideimg from "../icon/Side Image.png";
import google from "../icon/icon-Google.png";
import { useNavigate } from "react-router-dom";
import { useFirst } from "../Context/Context";
const links = [{ name: "Log In", path: "/login" }];
const SignUp = () => {
  const { signUpp } = useFirst();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    await signUpp(userData);
  };
  const navigate = useNavigate();
  return (
    <div className="flex my-10">
      <div>
        <img src={sideimg} alt="" />
      </div>
      <div className="flex items-center m-auto">
        <div className="flex flex-col  gap-10">
          <div>
            <div className="text-[36px]">Create an account</div>
            <div className="text-[16px]">Enter your details below</div>
          </div>
          <div className="flex flex-col gap-8">
            <input
              type="text"
              name="username"
              placeholder="Name"
              className="border-b outline-none border-b-gray-400  h-[60] w-[300] py-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              className="border-b outline-none border-b-gray-400 h-[60] w-[300] py-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border-b outline-none border-b-gray-400 h-[60] w-[300] py-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              className="border-b outline-none border-b-gray-400 h-[60] w-[300] py-2"
              onChange={(e) => handleChange(e)}
            />
            <button
              className="border-2 border-red-500  text-gray-900 hover:bg-red-400 hover:text-white w-[300px] h-[60px] rounded-[8px] cursor-pointer"
              onClick={handleLogin}
            >
              <b>Create Account</b>0
            </button>
            <button className="flex text-grey-900 w-[300px] h-[60px] rounded-[8px] items-center gap-3 border-2 border-grey-600 justify-center cursor-pointer">
              <img src={google} alt="" />
              Sign up with Google
            </button>
            <div className="flex gap-4">
              <span>Already Have an account?</span>
              <span className="font-bold cursor-pointer">
                {links.map((link) => (
                  <span onClick={() => navigate(`${link.path}`)}>
                    {link.name}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
