import React from "react";
import qr from "../icon/qr.png";
import google from "../icon/google.png";
import app from "../icon/app.png";
import fb from "../icon/fb.png";
import x from "../icon/x.png";
import insta from "../icon/insta.png";
import linkdin from "../icon/linkdin.png";

const Footer = () => {
  return (
    <div className="bg-black text-white  py-[80px] flex gap-[100px] justify-evenly px-[100px]">
      <div>
        <div className="flex flex-col gap-[10px]">
          <div className="text-[24px] font-bold">Exclusive</div>
          <div className="test-[20px] font-medium">Subscribe</div>
          <div className="test-[16px] font">Get 10% off your first order</div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-1 py-[10px] pr-[24px] pl-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[200px] gap-[10px] text-[20px]">
        <div>Support</div>
        <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
        <div>exclusive@gmail.com</div>
        <div>+88015-88888-9999</div>
      </div>
      <div className="flex flex-col gap-[10px] text-[20px]">
        <div>Account</div>
        <div>My Account</div>
        <div>Login / Register</div>
        <div>Cart</div>
        <div>Wishlist</div>
        <div>Shop</div>
      </div>
      <div className="text-[20px] flex flex-col gap-[10px]">
        <div>Quick Link</div>
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
        <div>FAQ </div>
        <div>Contact</div>
      </div>
      <div className="flex flex-col gap-[15px]">
        <div>Download App</div>
        <div className="text-[14px] font-extralight">
          Save 3$ with App New User Only
        </div>
        <div className="flex gap-[10px]">
          <div>
            <img src={qr} alt="" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <div>
              <img src={google} alt="" />
            </div>
            <div>
              <img src={app} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-[30px]"> 
          <img src={fb} alt="" />
          <img src={x} alt="" />
          <img src={insta} alt="" />
          <img src={linkdin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
