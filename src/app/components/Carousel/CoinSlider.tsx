import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoinCard from "./CoinCard";

const CoinSlider = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };

  return (
    <Slider {...settings}>
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
    </Slider>
  );
};

export default CoinSlider;
