import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChampaignCard } from "./ChampaignCard";
import { getExpiresTimeInDays } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import {
  getChampaigns,
  selectChampaign,
  selectChampaigns,
} from "../../redux/champaign/champaignSlice";
import {
  getCashCurrencies,
  getCryptoCurrencies,
} from "../../redux/currency/currencySlice";

import DonationModal from "../Donation/DonationModal";

export const ChampaignContainer = () => {
  const [open, setOpen] = useState(false);
  const champaigns = useSelector(selectChampaigns);
  const selectedChampaignRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const signal1 = dispatch(getChampaigns());
    const signal2 = dispatch(getCashCurrencies());
    const signal3 = dispatch(getCryptoCurrencies());

    return () => {
      signal1.abort();
      signal2.abort();
      signal3.abort();
    };
  }, []);

  const onSupport = useCallback(() => {
    dispatch(selectChampaign(selectedChampaignRef.current));
    setOpen(true);
    selectedChampaignRef.current = null;
  }, []);

  return (
    <ChampaignCardContainer>
      <DonationModal open={open} handleClose={() => setOpen(false)} />
      {champaigns.length
        ? champaigns.map((champaign) => (
            <ChampaignCard
              key={champaign.campaign_id}
              name={champaign.name}
              description={champaign.description}
              currentAmount={champaign.current_amount}
              goalAmount={champaign.goal_amount}
              expiresIn={getExpiresTimeInDays(champaign.exp_date)}
              currency={champaign.currency}
              status={champaign.status}
              onSupport={onSupport}
              champaign={champaign}
              selectedChampaignRef={selectedChampaignRef}
            />
          ))
        : null}
    </ChampaignCardContainer>
  );
};

const ChampaignCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 20px 35%;
  gap: 30px;
`;
