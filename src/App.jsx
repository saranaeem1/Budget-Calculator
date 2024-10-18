import React, { useState } from "react";
import Balance from "./components/Balance.jsx";
import TransactionForm from "./components/TransactionForm.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";
import FinancialSummary from "./components/FinancialSummary.jsx";
import "./App.css";

const App = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [showFinancialSummary, setShowFinancialSummary] = useState(false);

  const toggleTransactionForm = () => {
    setShowTransactionForm(!showTransactionForm);
  };

  const toggleFinancialSummary = () => {
    setShowFinancialSummary(!showFinancialSummary);
  };

  return (
    <>
      <Balance />
      <IncomeExpense />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 mt-10 mb-5">
        <div className={`md:block ${showTransactionForm ? "block" : "hidden"}`}>
          <TransactionForm />
        </div>

        <TransactionHistory />
        <div
          className={`md:block ${showFinancialSummary ? "block" : "hidden"}`}
        >
          <FinancialSummary />
        </div>
      </div>
      <div className="flex justify-center mx-10 mt-10 mb-5 gap-4 md:hidden">
        <button
          onClick={toggleTransactionForm}
          className="bg-[#FFC727] text-white px-4 py-2 rounded-md shadow"
        >
          Add Transaction
        </button>
        <button
          onClick={toggleFinancialSummary}
          className="bg-[#FFC727] text-white px-4 py-2 rounded-md shadow"
        >
          Financial Summary
        </button>
      </div>
    </>
  );
};

export default App;
