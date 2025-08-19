import React from "react";
import Card from "./Card";
import controller from "../icon/controller.png";
import monitor from "../icon/monitor.png";
import chair from "../icon/chair.png";
import ak from "../icon/ak.png";
import { Swiper } from "swiper/react";
import SwiperComp from "./SwiperComp";

const Flash = () => {
  const productData = [
    {
      name: "product 1",
      discount: "20%",
      rating: "4.3",
      price: "150",
      image: controller,
    },
    {
      name: "product 2",
      discount: "30%",
      rating: "5.3",
      price: "650",
      image: ak,
    },
    {
      name: "product 3",
      discount: "10%",
      rating: "6.3",
      price: "850",
      image: monitor,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
    {
      name: "product 4",
      discount: "70%",
      rating: "9.3",
      price: "950",
      image: chair,
    },
  ];
  return (
    <div className="container">
      <div className="flex gap-3 flex-col">
        <div className="flex h-full">
          <div className="w-5 h-9 bg-red-700 rounded-md"></div>
          <span className="text-red-700 font-medium flex items-center">
            Today's
          </span>
        </div>
        <span className="text-3xl font-medium text-black">Flash Sales</span>
      </div>
      <div className="flex gap-30 w-full">
        <SwiperComp data={productData}  />
      </div>
      <div className="w-full flex justify-center p-[40px]">
        <button className="py-4 bg-red-700 text-white px-5">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Flash;
