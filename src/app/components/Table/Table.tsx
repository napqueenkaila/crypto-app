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
  display: flex;
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
    </div>
  );
};

export default Table;