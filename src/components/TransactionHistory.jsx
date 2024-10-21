import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { AiFillDelete } from "react-icons/ai";

const TransactionHistory = () => {
 const { transactions, deleteTransaction } = useContext(TransactionContext);

 return (
  <div className="transaction-history p-4 bg-[#F9F9F9] rounded-lg shadow">
   <h2 className="text-[27px] font-bold mb-4">Transaction History</h2>
   {transactions.length === 0 ? (
    <p className="text-gray-500">No transactions available.</p>
   ) : (
    transactions.map((transaction) => (
     <div
      key={transaction.id}
      className="p-4 mb-4 rounded-lg bg-white"
      style={{
       boxShadow: "0px 3px 8px 0px rgba(74, 85, 104, 0.07)",
      }}
     >
      <div className="flex flex-wrap justify-between">
       <div>
        <p className="text-[#838383] font-bold text-[16px]">
         {transaction.category}
        </p>
       </div>
       <div className="flex space-x-6">
        <p
         className={`${
          transaction.type === "Income"
           ? "text-[#5AB064] bg-[#ECFFEA]"
           : "text-[#B05A5A] bg-[#FFEAEA]"
         } font-medium px-2 py-1 rounded-3xl text-[14px]`}
        >
         {transaction.type}
        </p>
        <button
         onClick={() => deleteTransaction(transaction.id)}
         className="text-[#D14D4D] hover:text-red-700 transition-colors duration-200"
        >
         <AiFillDelete size={24} />
        </button>
       </div>
      </div>
      <p className="font-bold text-[#030303] text-[32px]">
       ${transaction.amount}
      </p>
      <p className="text-[#4F4F4F] font-[15px]">{transaction.description}</p>
     </div>
    ))
   )}
  </div>
 );
};

export default TransactionHistory;
