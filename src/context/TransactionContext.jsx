import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const addTransaction = (transaction) => {
    const amount = parseFloat(transaction.amount);
    if (!isNaN(amount)) {
      const newTransaction = { ...transaction, id: Date.now() };
      setTransactions([...transactions, newTransaction]);
      setBalance(
        (prevBalance) =>
          prevBalance + (transaction.type === "Income" ? amount : -amount)
      );
    }
  };
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    const transactionToDelete = transactions.find(
      (transaction) => transaction.id === id
    );

    if (transactionToDelete) {
      setBalance(
        (prevBalance) =>
          prevBalance -
          (transactionToDelete.type === "Income"
            ? parseFloat(transactionToDelete.amount)
            : -parseFloat(transactionToDelete.amount))
      );
    }

    setTransactions(updatedTransactions);
  };
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        balance,
        income: calculateIncome(transactions),
        expense: calculateExpense(transactions),
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const calculateIncome = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
};

const calculateExpense = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
};
