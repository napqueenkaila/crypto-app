import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoinCard from "./CoinCard";
import { useGetCarouselDataQuery } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";

const CoinSlider = () => {
  const { currency } = useAppSelector(selectCurrency);
  const { data, isSuccess } = useGetCarouselDataQuery(currency);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {isSuccess
        ? data.map((coin) => <CoinCard key={coin.id} coinData={coin} />)
        : null}
    </Slider>
  );
};

export default CoinSlider;
