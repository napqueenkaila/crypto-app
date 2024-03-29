import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CoinRow from "./CoinRow";
import { TableWrapper, TableHead, CoinsTable } from "@/app/styling/components/Table/styled.Table";
import { useAppSelector } from "@/app/redux/hooks";
import { useGetTableDataQuery } from "@/app/redux/features/api";
import { selectCurrency } from "@/app/redux/features/currencySlice";

const Table = () => {
  const hasMore = useAppSelector((state) => state.hasMore.hasMore);
  const { currency } = useAppSelector(selectCurrency);
  const [page, setPage] = useState(1);
  const { data } = useGetTableDataQuery({page, currency});

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