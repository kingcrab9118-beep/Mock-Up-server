export class WithdrawhistoriesQueryDto {
  currency?: string;
  limit?: number;
  offset?: number;
}

export class WithdrawHistoryItemDto {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  address: string;
  network: string;
  txHash: string;
  fee: number;
  createdAt: string;
  completedAt?: string | null;
  cancelledAt?: string | null;
}

export class WithdrawhistoriesResponseDto {
  code: number;
  message: string;
  data: {
    recentWithdrawals: WithdrawHistoryItemDto[];
  }
}
