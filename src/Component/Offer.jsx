import React from "react";
import down from "../icon/down.svg"

const Offer = () => {
  return (
    <div className="w-full bg-black text-white flex justify-center font-light items-center gap-2 py-[10px]">
      Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!
      <strong className="font-bold underline">ShopNow</strong>
      <div className="relative left-[200px] flex gap-2">English
        <img src={down} alt="" />
      </div>
    </div>
  );
};

export default Offer;
