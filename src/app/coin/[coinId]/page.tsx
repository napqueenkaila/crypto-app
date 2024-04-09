"use client";
import Image from "next/image";
import { useGetCoinDataQuery } from "@/app/redux/features/api";
import CoinLink from "../CoinLink";
import CoinStats from "../CoinStats";
import CoinDescription from "../CoinDescription";
import CoinProfit from "../CoinProfit";
import {
  GridContainer,
  CoinName,
  HomeLink,
  LinkContainer,
} from "@/app/styling/components/CoinPage/styled.page";

export default function Coin({ params }: { params: { coinId: string } }) {
  const { data, isSuccess } = useGetCoinDataQuery(params.coinId);

  return (
    <main>
      {isSuccess ? (
        <GridContainer>
          <CoinName>
            <Image src={data.image.thumb} height={25} width={25} alt="" />
            <div>
              {data.name} ({data.symbol.toUpperCase()})
            </div>
          </CoinName>
          <HomeLink>
            <CoinLink link={data.links.homepage[0]} />
          </HomeLink>
          <CoinProfit marketData={data.market_data} />
          <CoinStats marketData={data.market_data} symbol={data.symbol} />
          <CoinDescription description={data.description["en"]} />
          <LinkContainer>
            <CoinLink link={data.links.blockchain_site[1]} />
            <CoinLink link={data.links.blockchain_site[2]} />
            <CoinLink link={data.links.blockchain_site[3]} />
          </LinkContainer>
        </GridContainer>
      ) : null}
    </main>
  );
}
