import React from "react";

const Confirmation = ({ formData }) => {
  return (
    
    <div dir="rtl">
      <h2>تایید اطلاعات</h2>
      <p><strong>نام:</strong> {formData.name} {formData.lastName}</p>
      <p><strong>شماره تماس:</strong> {formData.phone}</p>
      <p><strong>تاریخ تولد:</strong> {formData.birthDate}</p>
      <p><strong>شماره شبا:</strong> {formData.iban}</p>
      <p><strong>شماره حساب:</strong> {formData.accountNumber}</p>
      <p><strong>گردش سالانه:</strong> {formData.annualTurnover} تومان</p>
    </div>
   
  );
};

export default Confirmation;
