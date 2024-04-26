"use client";
import {
  DataBarContainer,
  DataDiv,
  PercentageBarDiv,
  Percent,
} from "@/app/styling/components/Navbar/styled.marketDataBar";
import { useGetMarketDataQuery } from "@/app/redux/features/api";
import { formatCompactCurrency } from "@/app/utils";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import {
  FlashIcon,
  ExchangeIcon,
  BtcIcon,
  EthIcon,
  ArrowIcon,
} from "../SVGs/index";

const MarketDataBar = () => {
  const { data, isLoading, isError, isUninitialized, isSuccess } =
    useGetMarketDataQuery("");
  const { currency } = useAppSelector(selectCurrency);

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>something went wrong..</div>;
  }

  return (
    <DataBarContainer>
      {isSuccess ? (
        <>
          <DataDiv>
            <FlashIcon />
            Coins {data.activeCryptos}
          </DataDiv>
          <DataDiv>
            <ExchangeIcon />
            Exchange {data.exchange}
          </DataDiv>

          <DataDiv>
            <ArrowIcon
              isPositive={data.totalMarketCap[currency] >= 0 ? true : false}
            />
            {formatCompactCurrency(data.totalMarketCap[currency], currency)}
          </DataDiv>
          <DataDiv>
            {formatCompactCurrency(data.totalVolume[currency], currency)}
            <PercentageBarDiv>
              <Percent color="#fff" $percent={100} />
            </PercentageBarDiv>
          </DataDiv>
          <DataDiv>
            <BtcIcon />
            {data.btcMarketCapPercent.toFixed(0)}%
            <PercentageBarDiv>
              <Percent color="#f7931a" $percent={data.btcMarketCapPercent} />
            </PercentageBarDiv>
          </DataDiv>
          <DataDiv>
            <EthIcon />
            {data.ethMarketCapPercent.toFixed(0)}%
            <PercentageBarDiv>
              <Percent color="#849dff" $percent={data.ethMarketCapPercent} />
            </PercentageBarDiv>
          </DataDiv>
        </>
      ) : null}
    </DataBarContainer>
  );
};

export default MarketDataBar;
