export class OrderBookItemDto {
  price: string;
  size: string;
}

export class OrderBookDto {
  symbol: string;
  bids: Array<{ price: string; size: string }>;
  asks: Array<{ price: string; size: string }>;
}
