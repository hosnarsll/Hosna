import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validateStep = (step, formData) => {
    let newErrors = {};

    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = "نام را وارد کنید.";
      if (!formData.lastName.trim()) newErrors.lastName = "نام خانوادگی را وارد کنید.";
      if (formData.phone.length !== 11) newErrors.phone = "شماره تماس باید ۱۱ رقم باشد.";
      if (!formData.birthDate) newErrors.birthDate = "تاریخ تولد را وارد کنید.";
    }

    if (step === 1) {
      if (formData.iban.length !== 24) newErrors.iban = "شماره شبا باید ۲۴ رقم باشد.";
      if (formData.accountNumber.length < 8) newErrors.accountNumber = "شماره حساب حداقل ۸ رقم باشد.";
      if (formData.annualTurnover < 1000000) newErrors.annualTurnover = "حداقل گردش سالانه باید ۱,۰۰۰,۰۰۰ تومان باشد.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateStep };
};

export default useValidation;