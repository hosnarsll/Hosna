import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import PersonalInfo from "./personalInfo";
import BankInfo from "./BankinfoFrom";
import Confirmation from "./confirmation";
import useValidation from "./UseValidation";
import "./style.css";









const steps = ["اطلاعات شخصی", "اطلاعات بانکی", "تایید نهایی"];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    birthDate: "",
    iban: "",
    accountNumber: "",
    annualTurnover: "",
  });

  const { errors, validateStep } = useValidation();

  const handleNext = () => {
    if (validateStep(activeStep, formData)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <div className="container">
      <div className="form-container">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

       

        {activeStep === 0 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {activeStep === 1 && <BankInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {activeStep === 2 && <Confirmation formData={formData} />}

        <div className="button-group">
          {activeStep > 0 && <Button variant="contained" color="primary" onClick={handleBack}>بازگشت</Button>}
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              بعدی
            </Button>
          ) : (
            <Button variant="contained" color="primary">ارسال فرم</Button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default StepperForm;