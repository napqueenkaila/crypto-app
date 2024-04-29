export interface CurrencyState {
  currency: string;
}

export interface DarkModeState {
  darkMode: boolean;
}

export interface HasMoreState {
  hasMore: boolean;
}

export interface SelectedCoinsState {
  coinOne: { id: string; name: string; symbol: string };
  coinTwo: { id: string; name: string; symbol: string };
  compareCoins: boolean;
}
