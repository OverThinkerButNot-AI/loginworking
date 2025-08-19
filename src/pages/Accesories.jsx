import React from "react";
import Categories from "./Categories";

const Accesories = () => {
  const data = [
    {
      name: "phone",
    },
    {
      name: "phone2",
    },
    {
      name: "phon3e",
    },
    {
      name: "pho4ne",
    },
    {
      name: "phon5e",
    },
    {
      name: "phone6",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-9 rounded-md bg-red-500"></div>
          <div className="text-red-700">Categories</div>
        </div>
        <div className="text-[36px] font-semibold">Browse By Categories</div>
      </div>

      {data.map((newdata) => (
        <Categories names={newdata.name} />
      ))}
    </div>
  );
};

export default Accesories;
