"use client";
import Image from "next/image";
import { useGetCoinDataQuery } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";

export default function Coin({ params }: { params: { coinId: string } }) {
  const {currency} = useAppSelector(selectCurrency);
  const { data, isSuccess } = useGetCoinDataQuery(params.coinId);

  return (
    <main>
      {isSuccess ? (
        <>
          <div>
            <Image src={data.image} height={25} width={25} alt="" />
            <div>
              {data.name} ({data.symbol.toUpperCase()})
            </div>
          </div>
          <div>
            <div>{data.links.homepage}</div>
          </div>
          <div>
            <div>{data.market_data.current_price[currency]}</div>
            <div>Profit: profit</div>
            <div>
              <div>All time high: {data.market_data.ath[currency]}</div>
              <div>{data.market_data.ath_date[currency]}</div>
            </div>
            <div>
              <div>All time low: {data.market_data.atl[currency]}</div>
              <div>{data.market_data.atl_date[currency]}</div>
            </div>
          </div>
          <div>
            <div>Market Cap</div>
            <div>{data.market_data.market_cap[currency]}</div>
            <div>Fully Diluted Valuation</div>
            <div>{data.market_data.fully_diluted_valuation[currency]}</div>
            <div>Volume 24h</div>
            <div>{data.market_data.total_volume[currency]}</div>
            <div>Volume/Market</div>
            <div>(not sure which value this is)</div>
            <div>Total Volume</div>
            <div>{data.market_data.total_volume[currency]}</div>
            <div>Circulating Supply</div>
            <div>{data.market_data.circulating_supply[currency]}</div>
            <div>Max Supply</div>
            <div>{data.market_data.max_supply[currency]}</div>
            <div>percent bar here</div>
          </div>
          <div>
            <div>Description</div>
            <div>{data.description["en"]}</div>
          </div>
          <div>
            <div>{data.links.blockchain_site[1]}</div>
            <div>{data.links.blockchain_site[2]}</div>
            <div>{data.links.blockchain_site[3]}</div>
          </div>
        </>
      ) : null}
    </main>
  );
}
