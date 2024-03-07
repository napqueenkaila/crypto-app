import { useGetTableDataQuery } from "@/app/redux/features/api";
import CoinRow from "./CoinRow";

const Table = () => {
  const { data } = useGetTableDataQuery("");
  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {data?.map((coin) => (
          <CoinRow key={coin.id} coinData={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
