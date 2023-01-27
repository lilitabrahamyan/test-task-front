import React from "react";
import styled from "styled-components";
import { ProgressBar as Progress } from "react-progressbar-fancy";
import { moneyFormatter } from "../../utils";

export const ProgressBar = ({
  score = 25,
  current = 5000,
  goal = 10000,
  currency,
}) => {
  return (
    <ProgressBarContent>
      <ProgressBarLabelContainer value={`0 0 10px 0`}>
        <ProgressBarLabel color="#717DC4">
          {moneyFormatter(current, currency)}
        </ProgressBarLabel>
        <ProgressBarLabel>{moneyFormatter(goal, currency)}</ProgressBarLabel>
      </ProgressBarLabelContainer>
      <Progress
        score={score > 100 ? 100 : score}
        hideText
        primaryColor="#6B80D4"
        secondaryColor="#4550AB"
      />
      <ProgressBarLabelContainer value={`10px 0 0 0`}>
        <ProgressBarLabel color="#cecece" weight="normal">
          Collected
        </ProgressBarLabel>
        <ProgressBarLabel color="#cecece" weight="normal">
          {score.toFixed(2)}%
        </ProgressBarLabel>
      </ProgressBarLabelContainer>
    </ProgressBarContent>
  );
};

const ProgressBarContent = styled.div`
  width: 100%;
  background-color: white;
`;

const ProgressBarLabelContainer = styled.div`
  margin: ${(props) => (props.value ? props.value : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBarLabel = styled.span`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.weight ? props.weight : "bold")};
  font-size: 20px;
`;
