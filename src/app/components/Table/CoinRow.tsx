import Image from "next/image";
import PercentBar from "./PercentBar";
import SmallChart from "./SmallChart";
import PercentChange from "./PercentChange";
import {
  StyledRow,
  RankDiv,
  NameDiv,
} from "@/app/styling/components/Table/styled.CoinRow";
import { CoinRowProps } from "@/app/types/interfaces/table.interfaces";

const CoinRow = ({ coinData }: CoinRowProps) => {
  const {
    id,
    name,
    symbol,
    image,
    market_cap_rank,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
    sparkline_in_7d,
  } = coinData;

  return (
    <StyledRow>
      <RankDiv>{market_cap_rank}</RankDiv>
      <NameDiv href={`/coin/${id}`}>
        <Image src={image} alt="" width={32} height={32} />
        <div className="name">
          {name} ({symbol.toUpperCase()})
        </div>
      </NameDiv>
      <div>${current_price}</div>
      <PercentChange percentChange={price_change_percentage_1h_in_currency} />
      <PercentChange percentChange={price_change_percentage_24h_in_currency} />
      <PercentChange percentChange={price_change_percentage_7d_in_currency} />
      <PercentBar value1={total_volume} value2={market_cap} />
      <PercentBar value1={circulating_supply} value2={total_supply} />
      <SmallChart smallChartData={sparkline_in_7d.price} />
    </StyledRow>
  );
};

export default CoinRow;
