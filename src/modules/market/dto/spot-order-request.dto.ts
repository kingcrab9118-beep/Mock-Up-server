export class SpotOrderRequestDto {
  symbol: string;
  side: string;
  type: string;
  price?: string;
  size: string;
  clientOid?: string;
}
