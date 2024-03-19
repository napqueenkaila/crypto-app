import { useGetTableDataQuery } from "@/app/redux/features/api";
import CoinRow from "./CoinRow";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
margin: 30px auto;
`;

const TableHead = styled.thead`
color: #d1d1d1;
font-size: 14px;
font-weight: 400;
`;

const Table = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetTableDataQuery(page);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {data ? (
        <InfiniteScroll
          dataLength={data.length}
          loader={<h4>Loading...</h4>}
          hasMore={true}
          next={fetchMoreData}
        >
          <StyledTable>
            <TableHead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>1h%</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>24h Volume / Market Cap</th>
                <th>Circulating / Total Supply</th>
                <th>Last 7d</th>
              </tr>
            </TableHead>
            <tbody>
              {data?.map((coin) => (
                <CoinRow key={coin.id} coinData={coin} />
              ))}
            </tbody>
          </StyledTable>
        </InfiniteScroll>
      ) : null}
    </div>
  );
};

export default Table;