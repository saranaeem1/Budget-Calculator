import React from "react";

const CustomButton = ({onClick,className,children}) => {
 return (
  <>
   <button
    type="button"
    onClick={onClick}
    className={className}
    style={{
     width: "152px",
     height: "81px",
    }}
   >
   {children}
   </button>
  </>
 );
};

export default CustomButton;
