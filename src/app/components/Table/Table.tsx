import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ColumnHeader from "./ColumnHeader";
import CoinRow from "./CoinRow";
import {
  TableWrapper,
  TableHead,
  CoinsTable,
} from "@/app/styling/components/Table/styled.Table";
import { useAppSelector } from "@/app/redux/hooks";
import { useGetTableDataQuery } from "@/app/redux/features/api";
import { selectCurrency } from "@/app/redux/features/currencySlice";

const Table = () => {
  const hasMore = useAppSelector((state) => state.hasMore.hasMore);
  const { currency } = useAppSelector(selectCurrency);
  const [page, setPage] = useState(1);
  const { data, isSuccess } = useGetTableDataQuery({ page, currency });

  const [sortBy, setSortBy] = useState("rank");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (column: string | undefined) => {
    if (column && sortBy === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else if (column) {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const sorted = [...data].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (sortBy === "name" && sortOrder === "asc") {
          return aValue.localeCompare(bValue);
        } else if (sortBy === "name" && sortOrder === "desc") {
          return bValue.localeCompare(aValue);
        } else if (sortOrder === "asc") {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      });
      setSortedData(sorted);
    }
  }, [isSuccess, sortBy, sortOrder, data]);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  const columnHeaderText = [
    { text: "#", value: "rank" },
    { text: "Name", value: "name" },
    { text: "Price", value: "current_price" },
    {
      text: "1h%",
      value: "price_change_percentage_1h_in_currency",
    },
    {
      text: "24h%",
      value: "price_change_percentage_24h_in_currency",
    },
    {
      text: "7d%",
      value: "price_change_percentage_7d_in_currency",
    },
    { text: "24h Volume / Market Cap" },
    { text: "Circulating / Total Supply" },
    { text: "Last 7d" },
  ];
  return (
    <TableWrapper>
      <TableHead>
        {columnHeaderText.map((column) => (
          <ColumnHeader
            key={column.text}
            column={column}
            handleSort={handleSort}
          />
        ))}
      </TableHead>
      {sortedData ? (
        <InfiniteScroll
          dataLength={sortedData.length}
          loader={<h4>Loading...</h4>}
          hasMore={hasMore}
          next={fetchMoreData}
          endMessage={<h4>No more coins.</h4>}
        >
          <CoinsTable>
            {sortedData?.map((coin) => (
              <CoinRow key={coin.id} coinData={coin} />
            ))}
          </CoinsTable>
        </InfiniteScroll>
      ) : null}
    </TableWrapper>
  );
};

export default Table;
