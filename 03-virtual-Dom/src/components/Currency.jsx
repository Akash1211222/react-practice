import React from "react";
import useCurrencyInfo from "../hooks/useCurrInfo";

const Currency = () => {
  return (
    <>
      <h1 className=" text-3xl bg-red-300 text-center">Currency app</h1>
      <useCurrencyInfo />
    </>
  );
};

export default Currency;
