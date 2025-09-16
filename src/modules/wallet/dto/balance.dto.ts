export class BalanceQueryDto {
  type?: string;
  currency?: string;
}

export class BalanceItemDto {
  currency: string;
  balance: number;
  type: string;
}

export class BalanceResponseDto {
  code: number;
  message: string;
  data: {
  balances: BalanceItemDto[];
  };
}
