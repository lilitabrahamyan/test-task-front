import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Divider, Margin } from "../shared";
import { DonationCurrency } from "./DonationCurrency";
import { TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  destroySelectedChampaign,
  selectSelectedChampaign,
} from "../../redux/champaign/champaignSlice";
import {
  selectCashCurrencies,
  selectCryptoCurrencies,
} from "../../redux/currency/currencySlice";
import { DonationPayInRadio } from "./DonationPayInRadio";
import { donate } from "../../redux/donation/donationSlice";

import { ReactComponent as CloseIcon } from "../../assets/images/icons/close-icon.svg";
import DonationLogo from "../../assets/images/donationLogo.png";

export const DonationForm = ({ handleClose }) => {
  const selectedChampaign = useSelector(selectSelectedChampaign);
  const cashCurrencies = useSelector(selectCashCurrencies);
  const cryptoCurrencies = useSelector(selectCryptoCurrencies);

  const [payIn, setPayIn] = useState("");
  const [donationForm, setDonationForm] = useState({
    nickname: "",
    currency: "",
    amount: "",
    campaignId: selectedChampaign.campaign_id,
  });
  const [errorDonationForm, setErrorDonationForm] = useState({
    nickname: "",
    amount: "",
  });
  const dispatch = useDispatch();

  const { nickname, currency, amount, campaignId } = donationForm;
  const { nickname: nicknameError } = errorDonationForm;
  const currenciesVariations = {
    cash: cashCurrencies,
    crypto: cryptoCurrencies,
  };

  useEffect(() => {
    return () => {
      dispatch(destroySelectedChampaign());
    };
  }, []);

  const handleNickname = (e) => {
    const { value } = e.target;
    if (/^[A-z_0-9]{0,}$/.test(value)) {
      setDonationForm({ ...donationForm, nickname: value });
      (errorDonationForm.amount || errorDonationForm.nickname) &&
        setErrorDonationForm({ amount: "", nickname: "" });
    } else {
      setErrorDonationForm({
        amount: "",
        nickname:
          "Should contains only English letters, digits and underscores",
      });
    }
  };

  const handlePayIn = (e) => {
    const { value } = e.target;
    setPayIn(value);
    setDonationForm({ ...donationForm, currency: "", amount: "" });
  };

  const handleCurrency = (e) => {
    const { value } = e.target;
    setDonationForm({ ...donationForm, currency: value, amount: "" });
  };

  const handleAmount = (e) => {
    const { value } = e.target;
    setDonationForm({ ...donationForm, amount: +value });
  };
  const handleDonate = () => {
    const body = {
      body: donationForm,
      isCrypto: payIn === "crypto",
      successCallback: handleClose,
    };
    dispatch(donate(body));
  };

  return (
    <DonationContent>
      <CloseIconWrapper>
        <CloseIcon onClick={handleClose} />
      </CloseIconWrapper>
      <DonationImageContent>
        <DonationImage src={DonationLogo} alt="Logo" />
      </DonationImageContent>
      {nicknameError && <Error>{nicknameError}</Error>}
      <TextField
        color="secondary"
        id="outlined-basic"
        label="Nickname"
        variant="outlined"
        value={nickname}
        onChange={handleNickname}
        fullWidth
      />
      <Divider />
      <DonationPayInRadio handlePayIn={handlePayIn} />
      <Margin value={"0 0 20px 0"} />
      {payIn && (
        <DonationCurrency
          handleCurrency={handleCurrency}
          currencyList={currenciesVariations[payIn]}
          payIn={payIn}
          value={currency}
        />
      )}
      <Margin value={"0 0 20px 0"} />
      {payIn && currency && (
        <TextField
          color="secondary"
          id="outlined-basic"
          label="Amount"
          type="number"
          variant="outlined"
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
          value={amount}
          onChange={handleAmount}
        />
      )}
      <Margin value={"0 0 20px 0"} />
      <Button
        onClick={handleDonate}
        disabled={!(nickname && currency && amount && campaignId)}
      >
        Donate
      </Button>
    </DonationContent>
  );
};

const DonationContent = styled.div`
  width: 800px;
  padding: 30px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
`;

const CloseIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const DonationImageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const DonationImage = styled.img`
  width: 300px;
`;

const Error = styled.div`
  color: red;
  margin-bottom: 15px;
`;
