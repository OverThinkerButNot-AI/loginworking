import React from "react";
import mainbanner from "../icon/mainbanner.png";
import BannerSwiper from "./BannerSwiper";

const Banner = () => {
  
  const bannerimages = [
    { image: mainbanner },
    { image: mainbanner },
    { image: mainbanner },
    { image: mainbanner },
  ];
  return (
    <div>
      <BannerSwiper bannerdata={bannerimages} />
    </div>
  );
};

export default Banner;
