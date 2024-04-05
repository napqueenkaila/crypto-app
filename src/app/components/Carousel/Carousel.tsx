import {
  Wrapper,
  HeaderDiv,
  StyledText,
} from "../../styling/components/Carousel/styled.Carousel";
import CoinSlider from "./CoinSlider";

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
