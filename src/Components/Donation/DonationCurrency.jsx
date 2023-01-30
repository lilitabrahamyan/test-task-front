import React from "react";
import { DonationCurrencySelect } from "./DonationCurrencySelect";

import { MenuItem } from "@mui/material";

export const DonationCurrency = ({
  handleCurrency,
  currencyList,
  payIn,
  value = "",
}) => {
  if (payIn === "crypto") {
    return (
      <DonationCurrencySelect handleChange={handleCurrency} value={value}>
        {currencyList.map((cur) => (
          <MenuItem key={cur.crypto_currency_id} value={cur.crypto_currency}>
            {cur.crypto_currency}
          </MenuItem>
        ))}
      </DonationCurrencySelect>
    );
  }

  return (
    <DonationCurrencySelect handleChange={handleCurrency} value={value}>
      {currencyList.map((cur) => (
        <MenuItem key={cur.currency_id} value={cur.currency}>
          {cur.currency}
        </MenuItem>
      ))}
    </DonationCurrencySelect>
  );
};
