import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
`;

const HeaderDiv = styled.div`
  margin-bottom: 15px;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.carousel.priceTextColor};
  font-size: 14px;
  font-weight: 400;
`;

export { Wrapper, HeaderDiv, StyledText };
