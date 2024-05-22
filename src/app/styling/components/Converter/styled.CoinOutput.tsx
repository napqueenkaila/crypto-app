import styled from "styled-components";

const OutputDiv = styled.div`
  font-weight: 400;
  margin: 20px 10px 10px;
  color: ${({ theme }) => theme.converter.outputText};
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.converter.spanColor};
`;

export { OutputDiv, StyledSpan };
