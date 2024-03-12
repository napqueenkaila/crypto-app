import styled from "styled-components";
import CoinCard from "./CoinCard";

const Wrapper = styled.div`
  margin: 20px auto;
`;

const CarouselContainer = styled.div`
display: flex;
gap: 15px;
overflow: auto;
white-space: nowrap;
`;

const HeaderDiv = styled.div``;

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
      <CarouselContainer>
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </CarouselContainer>
    </Wrapper>
  );
};

export default Carousel;
