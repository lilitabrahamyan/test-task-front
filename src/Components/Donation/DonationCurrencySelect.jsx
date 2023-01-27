import React from "react";
import { FormControl, InputLabel } from "@mui/material";

export const DonationCurrencySelect = ({ children }) => {
  return (
    <FormControl fullWidth>
      <InputLabel color="secondary" id="demo-simple-select-label">
        Select currency
      </InputLabel>
      {children}
    </FormControl>
  );
};