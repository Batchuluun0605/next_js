import React from "react";

const JsMethod = () => {
  const arrayLike = { 0: "a", 1: "b", 2: "c" };
  const newArray = [];
  for (const [key, value] of Object.entries(arrayLike)) {
    newArray.push(value);
  }
  return (
    <div>
      {newArray.map((item) => (
        <h1 key={item}>entries method: {item}</h1>
      ))}
    </div>
  );
};

export default JsMethod;
