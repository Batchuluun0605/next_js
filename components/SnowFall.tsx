"use client";
import Snowfall from "react-snowfall";
import tree from "../public/Christmas-Trees.jpg";
const SnowFall = () => {
  return (
    <div>
      <img src={tree.src} className=" object-cover w-full h-screen"></img>
      <Snowfall />
    </div>
  );
};

export default SnowFall;
