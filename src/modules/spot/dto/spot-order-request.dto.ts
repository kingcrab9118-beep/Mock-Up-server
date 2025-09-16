export class SpotOrderRequestDto {
  symbol: string;
  side: string;
  orderType: string;
  price?: string;
  size: string;
  clientOrderId?: string;
  requestTime?: string;
}
