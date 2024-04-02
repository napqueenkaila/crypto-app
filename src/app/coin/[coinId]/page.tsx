"use client";
import Image from "next/image";
import styled from "styled-components";
import { useGetCoinDataQuery } from "@/app/redux/features/api";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurrency } from "@/app/redux/features/currencySlice";
import CoinLink from "../CoinLink";
import CoinStats from "../CoinStats";

const GridContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 80vw;
  border: 3px red solid;
  display: grid;
  grid-template-areas:
    "name profit stats"
    "description description links";
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

const ProfitDiv = styled.div`
  border-radius: 12px;
  background-color: #1e1932;
  max-width: fit-content;
  padding: 40px 56px;
  grid-area: profit;
`;

const DescriptionDiv = styled.div`
  grid-area: description;
`;

const LinkContainer = styled.div`
  grid-area: links;
`;

export default function Coin({ params }: { params: { coinId: string } }) {
  const { currency } = useAppSelector(selectCurrency);
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
          <ProfitDiv>
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
          </ProfitDiv>
          <CoinStats marketData={data.market_data}/>
          <DescriptionDiv>
            <div>Description</div>
            <div>{data.description["en"]}</div>
          </DescriptionDiv>
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
