import React from "react";
import { useNavigate } from "react-router-dom";
import mainbanner from "../icon/mainbanner.png";
import Todays from "./Card";
import Flash from "./Flash";
import Categories from "./Categories";
import Accesories from "./Accesories";
import { Swiper } from "swiper/react";
import Banner from "./Banner";

const links = [
  { name: "Woman's Fashion>", path: "/wfashion" },
  { name: "Men's Fashion    >", path: "/wfashion" },
  { name: "Electronics", path: "/wfashion" },
  { name: "Home& Lifestyle", path: "/wfashion" },
  { name: "Medicine", path: "/wfashion" },
  { name: "Sports & Outdoor", path: "/wfashion" },
  { name: "Baby's &Toys", path: "/wfashion" },
  { name: "Groceries & Pets", path: "/wfashion" },
  { name: "Health & Beauty", path: "/wfashion" },
];
const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex p-[50px]">
        <div className="flex flex-col gap-3 ml-[50px] border-r-1 w-[200px]">
          {links.map((link) => (
            <span>{link.name}</span>
          ))}
        </div>
        
        <div className="overflow-hidden w-full">
          <Banner />
        </div>
      </div>
      <Flash />
      <Accesories />
      {/* <Swiper/> */}
    </div>
  );
};

export default Home;
