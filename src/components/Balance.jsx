import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const { balance } = useContext(TransactionContext);
  return (
    <div
      className="bg-gray-200 rounded-lg mt-10 mx-10 flex flex-col justify-center"
      style={{ backgroundColor: "#455A64", height: "139px" }}>
      <p className="text-[15px] text-white pl-8">Available balance</p>
      <p className="text-[29px] font-semibold mt-2 pl-8 text-white">${balance}</p>
    </div>
  );
};
export default Balance;
