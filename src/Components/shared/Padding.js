import styled from "styled-components";

export const Padding = styled.div`
  padding: ${(props) => (props.value ? props.value : "")};
`;
