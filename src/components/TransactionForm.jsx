import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import CustomInput from "./custom/custom-input";
import CustomSelect from "./custom/custom-select";
import CustomButton from "./custom/custom-button";
import { IncomeExpenseClassName } from "../constant";

const TransactionForm = () => {
 const { addTransaction } = useContext(TransactionContext);
 const [type, setType] = useState("Income");

 const [data, setData] = useState({
  category: "",
  amount: "",
  description: "",
 });

 const handleChange = (e) => {
  const { value, name } = e.target;
  setData({
   ...data,
   [name]: value,
  });
  console.log(data);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const {amount,category,description} =  data
  addTransaction({ type, category, amount, description });
  setData({
   amount: "",
   category: "",
   description: "",
  });
 };

 return (
  <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
   <h2 className="text-[27px] font-bold mb-4">Add Transaction</h2>
   <p className="text-[16px] text-[#030303] pt-3 pb-2">Select Type</p>
   <div className="flex mb-4">
    <CustomButton
     className={IncomeExpenseClassName(type, "Income")}
     onClick={() => setType("Income")}
    >
     Income
    </CustomButton>
    <CustomButton
     className={IncomeExpenseClassName(type, "Expense")}
     onClick={() => setType("Expense")}
    >
     Expense
    </CustomButton>
   </div>
   <CustomSelect
    handleChange={handleChange}
    type={type}
    value={data.category}
   />
   <CustomInput
    className={"block w-full border rounded mb-2 p-2"}
    type={"number"}
    name={"amount"}
    onChange={handleChange}
    placeholder={"$$$"}
    value={data.amount}
    label={"Amount"}
   />
   <CustomInput
    className="block w-full border rounded mb-2 pl-2 h-[128px]"
    type={"text"}
    name={"description"}
    onChange={handleChange}
    placeholder="Enter a description..."
    value={data.description}
    label={"Description"}
   />
   <button type="submit" className="bg-[#FFC727] w-full text-white p-2 rounded">
    Add Transaction
   </button>
  </form>
 );
};

export default TransactionForm;
