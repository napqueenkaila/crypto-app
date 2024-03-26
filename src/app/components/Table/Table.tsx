import { useGetTableDataQuery } from "@/app/redux/features/api";
import CoinRow from "./CoinRow";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/app/redux/hooks";

const TableWrapper = styled.div`
  max-width: 80vw;
`;

const TableHead = styled.div`
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 2fr) repeat(2, 4fr) 2fr;
  place-items: start;
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
    <TableWrapper>
      <TableHead>
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>1h%</div>
        <div>24h%</div>
        <div>7d%</div>
        <div>24h Volume / Market Cap</div>
        <div>Circulating / Total Supply</div>
        <div>Last 7d</div>
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
    </TableWrapper>
  );
};

export default Table;