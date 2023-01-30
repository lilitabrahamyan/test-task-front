import React from "react";
import { FormControl, InputLabel, Select } from "@mui/material";

export const DonationCurrencySelect = ({ children, handleChange, value }) => {
  return (
    <FormControl fullWidth>
      <InputLabel color="secondary" id="demo-simple-select-label">
        Select currency
      </InputLabel>
      <Select
        color="secondary"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Select currency"
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  );
};
