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
  max-width: 80vw;
  display: grid;
  grid-template-areas:
    "name profit stats"
    "description description links";
    gap: 20px;
`;

const CoinName = styled.div`
  grid-area: name;
  background-color: #1e1932;
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  border-radius: 12px;
  padding: 40px 56px;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  grid-area: links;
`;

export default function Coin({ params }: { params: { coinId: string } }) {
  const { data, isSuccess } = useGetCoinDataQuery(params.coinId);

  return (
    <main>
      {isSuccess ? (
        <GridContainer>
          <div>
            <CoinName>
              <Image src={data.image.thumb} height={25} width={25} alt="" />
              <div>
                {data.name} ({data.symbol.toUpperCase()})
              </div>
            </CoinName>
            <CoinLink link={data.links.homepage[0]} />
          </div>
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
