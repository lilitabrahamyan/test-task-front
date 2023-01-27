import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => (props.disabled ? "#bdbdbd" : "#3c3fa0")};
  font-size: 21px;
  padding: 20px 5px 20px 5px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
