export class FutureOrderRequestDto {
  symbol: string;
  side: string;
  tradingSide: string;
  orderType: string;
  force?: string;
  price?: string;
  size: string;
  leverage?: string;
  marginMode?: string;
  marginCurrency?: string;
  triggerPrice?: string;
  tpslType?: string;
  tpPrice?: string;
  slPrice?: string;
  requestTime?: string;
}
