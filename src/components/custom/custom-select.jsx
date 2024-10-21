import React from "react";

const CustomSelect = ({value,handleChange,type}) => {
 return (
  <div>
   <p className="text-[16px] text-[#030303] pt-3 pb-2">Select {type}</p>
   <select
    value={value}
    onChange={handleChange}
    name="category"
    className="block w-full border rounded mb-2 p-2"
   >
    <option value="" disabled>
     Select {value}
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
  </div>
 );
};

export default CustomSelect;
