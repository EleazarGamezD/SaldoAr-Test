export interface CurrencyInfo {
  ask: number;
  bid: number;
  currency: string;
  bid_url: string;
  ask_url: string;
  randomNumber?: number;
}

export interface ExchangeRates {

  currencyName: CurrencyInfo;
}

