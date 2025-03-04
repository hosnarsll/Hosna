

import { TextField } from "@mui/material";

const InputTextField = ({ label, name, type = "text", value, onChange, error, helperText }) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      margin="normal"
      InputLabelProps={type === "date" ? { shrink: true } : {}}
    />
  );
};

export default InputTextField;