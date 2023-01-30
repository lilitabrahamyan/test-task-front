import React, { memo } from "react";
import styled from "styled-components";
import { Divider, Button } from "../shared";
import { ToFade } from "../tools/ToFade/ToFade";
import { ProgressBar } from "../../ui-kit/ProgressBar/ProgressBar";

import { Padding } from "../shared";

import { ReactComponent as ClockIcon } from "../../assets/images/icons/clock-icon.svg";

export const ChampaignCard = memo(
  ({
    name,
    currentAmount,
    goalAmount,
    description,
    expiresIn,
    currency,
    status,
    onSupport,
    selectedChampaignRef,
    champaign,
  }) => {
    return (
      <ToFade>
        <ChampaignContent>
          <Padding value={"20px 20px 0 20px"}>
            <ChampaignHeader>
              <ChampaignStatusContent>
                <ChampaignStatusLabel>Status:</ChampaignStatusLabel>
                <ChampaignStatus>{status}</ChampaignStatus>
              </ChampaignStatusContent>
              {expiresIn ? (
                <ChampaignExpContent>
                  <ClockIcon />
                  <ChampaignExpTitle>{expiresIn} days left</ChampaignExpTitle>
                </ChampaignExpContent>
              ) : null}
            </ChampaignHeader>
            <ChampaignTitle>{name}</ChampaignTitle>
            <Divider />
            <ProgressBar
              currency={currency}
              current={currentAmount}
              goal={goalAmount}
              score={(currentAmount * 100) / goalAmount}
            />
            <Divider />
          </Padding>
          <ChampaignDescriptionContainer>
            <ChampaignDescriptionTitle>Description</ChampaignDescriptionTitle>
            <ChampaignDescription>{description}</ChampaignDescription>
          </ChampaignDescriptionContainer>
          <Padding value={"20px 20px 20px 20px"}>
            <Button
              onClick={() => {
                selectedChampaignRef.current = champaign;
                onSupport();
              }}
            >
              Support the project
            </Button>
          </Padding>
        </ChampaignContent>
      </ToFade>
    );
  }
);

const ChampaignContent = styled.div`
  background-color: white;
  width: 700px;
  border-radius: 30px;
`;

const ChampaignHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ChampaignStatusContent = styled.div`
  display: flex;
  align-items: center;
`;

const ChampaignStatusLabel = styled.span`
  color: #4b4ea3;
  font-weight: bold;
`;

const ChampaignStatus = styled.span`
  color: black;
  margin-left: 5px;
  text-transform: uppercase;
`;

const ChampaignExpContent = styled.div`
  display: flex;
  align-items: center;
`;

const ChampaignExpTitle = styled.span`
  color: #cecece;
`;

const ChampaignTitle = styled.h1`
  color: #1b1b1b
  font-weight: bold;
  line-height: 50px;
`;

const ChampaignDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChampaignDescriptionTitle = styled.span`
  width: 100%;
  color: #4b4ea3;
  font-weight: bold;
  font-size: 20px;
  padding: 0 20px 0 20px;
  margin-bottom: 10px;
`;

const ChampaignDescription = styled.span`
  width: 100%;
  background-color: #f9f9fb;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  padding: 20px;
  line-height: 25px;
`;
