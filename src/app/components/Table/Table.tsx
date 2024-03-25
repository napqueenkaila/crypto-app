import { useGetTableDataQuery } from "@/app/redux/features/api";
import CoinRow from "./CoinRow";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";

const TableHead = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
  padding: 16px 20px;
  display: flex;
`;

const FlexGrowOne = styled.div`
  flex-grow: 1;
`;

const FlexGrowTwo = styled.div`
  flex-grow: 2;
`;

const FlexGrowThree = styled.div`
  flex-grow: 3;
`;

const FlexGrowFour = styled.div`
  flex-grow: 4;
`;

const CoinsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Table = () => {
  const hasMore = useAppSelector((state) => state.hasMore.hasMore);
  const [page, setPage] = useState(1);
  const { data } = useGetTableDataQuery(page);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <TableHead>
        <FlexGrowOne>#</FlexGrowOne>
        <FlexGrowFour>Name</FlexGrowFour>
        <FlexGrowTwo>Price</FlexGrowTwo>
        <FlexGrowTwo>1h%</FlexGrowTwo>
        <FlexGrowTwo>24h%</FlexGrowTwo>
        <FlexGrowTwo>7d%</FlexGrowTwo>
        <FlexGrowFour>24h Volume / Market Cap</FlexGrowFour>
        <FlexGrowFour>Circulating / Total Supply</FlexGrowFour>
        <FlexGrowThree>Last 7d</FlexGrowThree>
      </TableHead>
      {data ? (
        <InfiniteScroll
          dataLength={data.length}
          loader={<h4>Loading...</h4>}
          hasMore={hasMore}
          next={fetchMoreData}
          endMessage={<h4>No more coins.</h4>}
        >
          <CoinsTable>
            {data?.map((coin) => (
              <CoinRow key={coin.id} coinData={coin} />
            ))}
          </CoinsTable>
        </InfiniteScroll>
      ) : null}
    </div>
  );
};

export default Table;