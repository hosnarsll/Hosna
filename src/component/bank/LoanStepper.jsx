import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import "./style.css";
import PersonalInfoForm from "./perdonalInfoForm";
import BankInfoForm from "./BankinfoFrom";

const steps = ["اطلاعات شخصی", "اطلاعات بانکی", "تسهیلات"];

const LoanStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalCode: "",
    birthDate: "",
    contactNumber: "",
    iban: "",
    accountNumber: "",
    annualBalance: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    nationalCode: "",
    contactNumber: "",
    iban: "",
    accountNumber: "",
  });

  const handleNext = () => {
    if (validateFields()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "contactNumber":
        if (!/^\d{11}$/.test(value)) {
          error = "شماره تماس باید 11 رقم باشد.";
        }
        break;
      case "nationalCode":
        if (!/^\d{10}$/.test(value)) {
          error = "کد ملی باید 10 رقم باشد.";
        }
        break;
      case "iban":
        if (!/^\d{16}$/.test(value)) {
          error = "شماره شبا باید 16 رقم باشد.";
        }
        break;
      case "accountNumber":
        if (!/^\d{12}$/.test(value)) {
          error = "شماره حساب باید 12 رقم باشد.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateFields = () => {
    let isValid = true;
    Object.keys(errors).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        isValid = false;
      }
    });
    return isValid;
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        
        return <PersonalInfoForm formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <BankInfoForm formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Box>تسهیلات</Box>;
      default:
        return null;
    }
  };

  return (
    <Box className="loan-stepper">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <Box className="button-container">
        {activeStep > 0 && (
          <Button onClick={handleBack} className="back-button">
            بازگشت
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext} className="next-button">
            بعدی
          </Button>
        ) : (
          <Button className="submit-button">ارسال</Button>
        )}
      </Box>
    </Box>
  );
};

export default LoanStepper;