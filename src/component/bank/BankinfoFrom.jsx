import React from "react";
import CustomTextField from "./InputTextField";

const BankInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div dir="rtl"
     
    >
      <h2>اطلاعات بانکی</h2>
      <CustomTextField label="شماره شبا" name="iban" value={formData.iban} onChange={handleChange} error={!!errors.iban} helperText={errors.iban} />
      <CustomTextField label="شماره حساب" name="accountNumber" value={formData.accountNumber} onChange={handleChange} error={!!errors.accountNumber} helperText={errors.accountNumber} />
      <CustomTextField label="گردش سالانه (تومان)" name="annualTurnover"  type="number" value={formData.annualTurnover} onChange={handleChange} error={!!errors.annualTurnover} helperText={errors.annualTurnover} />
    </div>
  );
};

export default BankInfo;