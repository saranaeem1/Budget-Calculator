import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { BsBank2 } from "react-icons/bs";
import { BiSolidWalletAlt } from "react-icons/bi";

const IncomeExpense = () => {
  const { income, expense } = useContext(TransactionContext);

  return (
    <div className="flex mx-10 mt-10">
      <div className="rounded-lg w-1/2 flex flex-col justify-center pl-8 bg-[#D9E7E5] h-[139px]">
        <div className="bg-[#42887C] w-[40px] h-[40px] flex items-center justify-center rounded-full">
          <BsBank2 style={{ color: "white", width: "30px" }} />
        </div>
        <p className="text-[17px] font-bold mt-2 text-[#1F2937]">
          ${income.toFixed(2)}
        </p>
        <p className="text-[14px] text-[#686868]">Income</p>
      </div>

      <div className="w-1/2 rounded-lg flex flex-col justify-center ml-4 pl-8 bg-[#E6E2E6] h-[139px]">
        <div className="bg-[#836F81] w-[40px] h-[40px] flex items-center justify-center rounded-full">
          <BiSolidWalletAlt style={{ color: "white", width: "30px" }} />
        </div>
        <p className="text-[17px] font-bold mt-2">${expense.toFixed(2)}</p>
        <p className="text-[14px] text-[#686868]">Expense</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
