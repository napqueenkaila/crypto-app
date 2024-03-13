import styled from "styled-components";
import CoinSlider from "./CoinSlider";

const Wrapper = styled.div`
  margin: 20px auto;
`;

const HeaderDiv = styled.div`
margin-bottom: 15px;
`;

const StyledText = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
`;

const Carousel = () => {
  return (
    <Wrapper>
      <HeaderDiv>
        <StyledText>Select the currency to view statistics</StyledText>
      </HeaderDiv>
      <CoinSlider />
    </Wrapper>
  );
};

export default Carousel;
