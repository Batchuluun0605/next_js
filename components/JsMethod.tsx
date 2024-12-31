import React from "react";

const JsMethod = () => {
  const arrayLike = { 0: "a", 1: "b", 2: "c" };
  const newArray = [];
  for (const [key, value] of Object.entries(arrayLike)) {
    newArray.push(value);
  }
  const isBelowThreshold = (currentValue: number) => currentValue < 40;

  const array1 = [1, 30, 39, 29, 10, 13];

  console.log(array1.every(isBelowThreshold));
  return (
    <div>
      {newArray.map((item) => (
        <h1 key={item}>entries method: {item}</h1>
      ))}
      <h2>every method</h2>
    </div>
  );
};

export default JsMethod;
