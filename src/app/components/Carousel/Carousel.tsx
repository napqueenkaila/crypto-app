import styled from "styled-components";
import CoinCard from "./CoinCard";

const CarouselContainer = styled.div``;

const HeaderDiv = styled.div``;

const StyledText = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
`;

const Carousel = () => {
  return (
    <div>
      <HeaderDiv>
        <StyledText>Select the currency to view statistics</StyledText>
      </HeaderDiv>
      <CarouselContainer>
        <CoinCard />
      </CarouselContainer>
    </div>
  );
};

export default Carousel;
