"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  DataBarContainer,
  DataDiv,
  PercentageBarDiv,
  Percent,
} from "@/app/styling/components/styled.marketDataBar";
import StoreProvider from "@/app/StoreProvider";

interface Data {
  activeCryptos: number | string;
  exchange: number | string;
  totalVolume: number | string;
  totalMarketCap: number | string;
  btcMarketCapPercent: number | string;
  ethMarketCapPercent: number | string;
}

const MarketDataBar = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [marketData, setMarketData] = useState<Data>({
    activeCryptos: "",
    exchange: "",
    totalVolume: "",
    totalMarketCap: "",
    btcMarketCapPercent: "",
    ethMarketCapPercent: "",
  });

  const selectedCurrency = "usd";

  useEffect(() => {
    setLoading(true);
    fetch("https://api.coingecko.com/api/v3/global")
      .then((res) => res.json())
      .then((data) => {
        setMarketData({
          activeCryptos: data.data.active_cryptocurrencies,
          exchange: data.data.markets,
          totalVolume: data.data.total_volume[selectedCurrency],
          totalMarketCap: data.data.total_market_cap[selectedCurrency],
          btcMarketCapPercent: data.data.market_cap_percentage.btc,
          ethMarketCapPercent: data.data.market_cap_percentage.eth,
        });
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [selectedCurrency]);

  const compactFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
  });

  const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    style: "currency",
    currency: "USD",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StoreProvider>
      <DataBarContainer>
        <DataDiv>
          <Image alt="" src="Flash.svg" width={25} height={25} />
          Coins {marketData.activeCryptos}
        </DataDiv>

        <DataDiv>
          <Image alt="" src="ExchangeIcon.svg" width={25} height={25} />
          Exchange {marketData.exchange}
        </DataDiv>
        <DataDiv>
          <Image alt="" src="GreenArrow.svg" width={25} height={25} />
          {compactFormatter.format(marketData.totalMarketCap)}
          {marketData.totalMarketCap}
        </DataDiv>
        <DataDiv>
          {compactCurrencyFormatter.format(marketData.totalVolume)}
          <PercentageBarDiv>
            <Percent color="#fff" $percent={100} />
          </PercentageBarDiv>
        </DataDiv>
        <DataDiv>
          <Image alt="" src="BTCIcon.svg" width={25} height={25} />
          {marketData.btcMarketCapPercent}%
          <PercentageBarDiv>
            <Percent
              color="#f7931a"
              $percent={marketData.btcMarketCapPercent}
            />
          </PercentageBarDiv>
        </DataDiv>
        <DataDiv>
          <Image alt="" src="ETHIcon.svg" width={25} height={25} />
          {marketData.ethMarketCapPercent}%
          <PercentageBarDiv>
            <Percent
              color="#849dff"
              $percent={marketData.ethMarketCapPercent}
            />
          </PercentageBarDiv>
        </DataDiv>
      </DataBarContainer>
    </StoreProvider>
  );
};

export default MarketDataBar;
