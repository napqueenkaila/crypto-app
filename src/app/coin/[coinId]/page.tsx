"use client";
import Image from "next/image";
import styled from "styled-components";
import { useGetCoinDataQuery } from "@/app/redux/features/api";
import CoinLink from "../CoinLink";
import CoinStats from "../CoinStats";
import CoinDescription from "../CoinDescription";
import CoinProfit from "../CoinProfit";

const GridContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  max-width: 90vw;
  display: grid;
  grid-template-areas:
    "name profit stats stats"
    "homelink profit stats stats"
    "description description links links";
  gap: 20px;
  justify-content: center;
  place-items: stretch center;
`;

const CoinName = styled.div`
  grid-area: name;
  background-color: #1e1932;
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  border-radius: 12px;
  padding: 40px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;
`;

const HomeLink = styled.div`
  grid-area: homelink;
  place-self: center ;
  width: 100%;
`;

const LinkContainer = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

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
