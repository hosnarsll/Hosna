import React from "react";
import InputTextField from "./InputTextField";

const PersonalInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <h2>اطلاعات شخصی</h2>
      <InputTextField label="نام" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
      <InputTextField label="نام خانوادگی" name="lastName" value={formData.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} />
      <InputTextField label="شماره تماس" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
      <InputTextField label="تاریخ تولد" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} error={!!errors.birthDate} helperText={errors.birthDate} />
    </div>
  );
};

export default PersonalInfo;