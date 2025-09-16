export class CancelOrderRequestDto {
  symbol: string;
  orderId: string;
  clientOrderId?: string;
  requestTime?: string;
}
