import React from "react";

const NumberFormatter = ({ number }) => {
  return <span>{number.toLocaleString("fa-IR")}</span>;
};

export default NumberFormatter;