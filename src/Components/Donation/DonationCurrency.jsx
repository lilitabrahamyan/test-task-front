import React from "react";
import { DonationCurrencySelect } from "./DonationCurrencySelect";

import { Select, MenuItem } from "@mui/material";

export const DonationCurrency = ({
  handleCurrency,
  currencyList,
  payIn,
  value = "",
}) => {
  if (payIn === "crypto") {
    return (
      <DonationCurrencySelect>
        <Select
          color="secondary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select currency"
          onChange={handleCurrency}
        >
          {currencyList.map((cur) => (
            <MenuItem key={cur.crypto_currency_id} value={cur.crypto_currency}>
              {cur.crypto_currency}
            </MenuItem>
          ))}
        </Select>
      </DonationCurrencySelect>
    );
  }

  return (
    <DonationCurrencySelect>
      <Select
        color="secondary"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Select currency"
        onChange={handleCurrency}
      >
        {currencyList.map((cur) => (
          <MenuItem key={cur.currency_id} value={cur.currency}>
            {cur.currency}
          </MenuItem>
        ))}
      </Select>
    </DonationCurrencySelect>
  );
};
