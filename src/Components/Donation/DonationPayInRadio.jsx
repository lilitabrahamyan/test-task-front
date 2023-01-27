import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export const DonationPayInRadio = ({ handlePayIn }) => {
  return (
    <FormControl>
      <FormLabel color="secondary" id="demo-radio-buttons-group-label">
        Pay in
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handlePayIn}
        row
        color="secondary"
      >
        <FormControlLabel
          value="cash"
          control={<Radio color="secondary" />}
          label="Cash"
        />
        <FormControlLabel
          value="crypto"
          control={<Radio color="secondary" />}
          label="Crypto"
        />
      </RadioGroup>
    </FormControl>
  );
};