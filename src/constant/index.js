const IncomeExpenseClassName = (type, name) => {
 let className;

 if (name === "Income") {
  className = `mr-2 ${
   type === "Income" ? "bg-[#D9E7E5]" : "bg-gray-300"
  } text-[#1F2937] ${
   type === "Income" ? "font-bold" : "font-normal"
  } rounded-lg border ${
   type === "Income" ? "border-[#42887C]" : "border-gray-300"
  }`;
 } else {
  className = `${
   type === "Expense" ? "bg-[#FFEAEA]" : "bg-gray-300"
  } text-[#1F2937] ${
   type === "Expense" ? "font-bold" : "font-normal"
  } rounded-lg  border ${
   type === "Expense" ? "border-[#D14D4D]" : "border-gray-300"
  }`;
 }

 return className;
};

export { IncomeExpenseClassName };
