import React from "react";

const CustomInput = ({
 type,
 placeholder,
 name,
 value,
 onChange,
 className,
 label,
}) => {
 return (
  <>
   <p className="text-[16px] text-[#030303] pt-3 pb-2">{label}</p>
   <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className={className}
   />
  </>
 );
};

export default CustomInput;
