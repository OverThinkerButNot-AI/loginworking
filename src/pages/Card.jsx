import React from "react";
import five from "../icon/five.png";
import eye from "../icon/eye.png";
import heart from "../icon/heart.png";

const Card = ({ name, discount, price, rating, image }) => {
  return (
    <div className="w-2xs flex flex-col gap-5 group cursor-pointer ">
      <div className="w-full h-[200px] bg-gray-500 relative overflow-hidden rounded-md border-0 hover:translate-z-full ">
        <div className="m-2 bg-red-700 rounded-md w-9">{discount}</div>

        <img
          src={image}
          className="object-contain w-[80%] h-[60%] m-auto "
          alt=""
        />

        <div className="absolute flex flex-col gap-2 top-2 right-2">
          <img
            src={heart}
            className=" w-6 ml-10 p-1 bg-white rounded-full "
            alt=""
          />
          <img
            src={eye}
            className=" w-6 ml-10 p-1 bg-white rounded-full "
            alt=""
          />
        </div>
        <div className="absolute bottom-0 bg-black text-white text-center w-full translate-y-full group-hover:translate-y-0 duration-300">
          Add to cart
        </div>
      </div>
      <div className="flex flex-col gap-4"></div>
      <span>{name}</span>
      <span>{discount}</span>
      <span className="text-red-600">${price}</span>

      <div className="flex items-center">
        <img src={five} className="w-[10px] h-[10px]" alt="" />
        <img src={five} className="w-[10px] h-[10px]" alt="" />
        <img src={five} className="w-[10px] h-[10px]" alt="" />
        <img src={five} className="w-[10px] h-[10px]" alt="" />
        <img src={five} className="w-[10px] h-[10px]" alt="" />
        <span className="ml-2 text-xs">{rating}</span>
      </div>
    </div>
  );
};

export default Card;
