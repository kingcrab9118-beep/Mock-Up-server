export class DeposithistoriesQueryDto {
  currency?: string;
  limit?: number;
  offset?: number;
}

export class DepositHistoryItemDto {
  id: string;
  amount: number;
  currency: string;
  status: string;
  address: string;
  network: string;
  txHash: string;
  totalCount: number;
  createdAt: string;
  confirmedAt?: string | null;
}

export class DeposithistoriesResponseDto {
  code: number;
  message: string;
  data: {
    recentDeposits: DepositHistoryItemDto[];
  };
}
