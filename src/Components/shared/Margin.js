import styled from "styled-components";

export const Margin = styled.div`
  margin: ${(props) => (props.value ? props.value : "")};
`;
