import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ type, category, amount, description });
    setCategory("");
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-[27px] font-bold mb-4">Add Transaction</h2>
      <p className="text-[16px] text-[#030303] pt-3 pb-2">Select Type</p>
      <div className="flex mb-4">
        <button
          type="button"
          onClick={() => setType("Income")}
          className={`mr-2 ${
            type === "Income" ? "bg-[#D9E7E5]" : "bg-gray-300"
          } text-[#1F2937] rounded-lg border ${
            type === "Income" ? "border-[#42887C]" : "border-gray-300"
          }`}
          style={{
            width: "152px",
            height: "81px",
          }}
        >
          Income
        </button>
        <button
          type="button"
          onClick={() => setType("Expense")}
          className={`${
            type === "Expense" ? "bg-[#FFEAEA]" : "bg-gray-300"
          } text-[#1F2937] rounded-lg border ${
            type === "Expense" ? "border-[#D14D4D]" : "border-gray-300"
          }`}
          style={{
            width: "152px",
            height: "81px",
          }}
        >
          Expense
        </button>
      </div>
      <p className="text-[16px] text-[#030303] pt-3 pb-2">Select Category</p>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full border rounded mb-2 p-2"
      >
        <option value="" disabled>
          Select Category
        </option>
        {type === "Income" && (
          <>
            <option value="Salary">Salary</option>
            <option value="Rental Income">Rental Income</option>
            <option value="Business">Business</option>
            <option value="Stocks">Stocks</option>
          </>
        )}
        {type === "Expense" && (
          <>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Grocery">Grocery</option>
          </>
        )}
      </select>
      <p className="text-[16px] text-[#030303] pt-3 pb-2">Amount</p>
      <input
        type="number"
        placeholder="$$$"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full border rounded mb-2 p-2"
      />
      <p className="text-[16px] text-[#030303] pt-3 pb-2">Description</p>
      <input
        type="text"
        placeholder="Enter a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full border rounded mb-2 pl-2"
        style={{ height: "128px" }}
      />
      <button className="bg-[#FFC727] w-full text-white p-2 rounded">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
