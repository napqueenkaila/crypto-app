"use client";
import Image from "next/image";
import {
  DataBarContainer,
  DataDiv,
  PercentageBarDiv,
  Percent,
} from "@/app/styling/components/styled.marketDataBar";
import { useGetMarketDataQuery } from "@/app/redux/features/api";
import { compactCurrencyFormatter } from "@/app/utils";

const MarketDataBar = () => {
  const { data, isLoading, isError, isUninitialized } =
    useGetMarketDataQuery("");

  if (isLoading || isUninitialized) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>something went wrong..</div>;
  }

  return (
    <DataBarContainer>
      <DataDiv>
        <Image alt="" src="Flash.svg" width={25} height={25} />
        Coins {data?.activeCryptos}
      </DataDiv>

      <DataDiv>
        <Image alt="" src="ExchangeIcon.svg" width={25} height={25} />
        Exchange {data?.exchange}
      </DataDiv>
      <DataDiv>
        <Image alt="" src="GreenArrow.svg" width={25} height={25} />
        {compactCurrencyFormatter.format(data?.totalMarketCap.usd)}
      </DataDiv>
      <DataDiv>
        {compactCurrencyFormatter.format(data?.totalVolume.usd)}
        <PercentageBarDiv>
          <Percent color="#fff" $percent={100} />
        </PercentageBarDiv>
      </DataDiv>
      <DataDiv>
        <Image alt="" src="BTCIcon.svg" width={25} height={25} />
        {data?.btcMarketCapPercent.toFixed(0)}%
        <PercentageBarDiv>
          <Percent color="#f7931a" $percent={data?.btcMarketCapPercent} />
        </PercentageBarDiv>
      </DataDiv>
      <DataDiv>
        <Image alt="" src="ETHIcon.svg" width={25} height={25} />
        {data?.ethMarketCapPercent.toFixed(0)}%
        <PercentageBarDiv>
          <Percent color="#849dff" $percent={data?.ethMarketCapPercent} />
        </PercentageBarDiv>
      </DataDiv>
    </DataBarContainer>
  );
};

export default MarketDataBar;
