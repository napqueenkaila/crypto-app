import { Dispatch, SetStateAction } from "react";
import { TableData } from "./api.interfaces";

export interface CoinInputProps {
  text: string;
  coinData: TableData;
  setCoin: Dispatch<SetStateAction<TableData>>;
  quantity: number;
  resetQuantities: () => void;
  handleQuantityChange: (e: any) => void;
}

export interface CoinsContainerProps {
  fromCoin: TableData;
  toCoin: TableData;
  setFromCoin: Dispatch<SetStateAction<TableData>>;
  setToCoin: Dispatch<SetStateAction<TableData>>;
}

export interface SearchProps {
  setCoin: Dispatch<SetStateAction<TableData>>;
  resetQuantities: () => void;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}