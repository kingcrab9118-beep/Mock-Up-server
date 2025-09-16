export class WithdrawRequestDto {
  currency: string;
  amount: number;
  address: string;
  network?: string;
  memo?: string;
}

export class WithdrawResponseDto {
  withdrawId: string;
  balance: number;
  status: 'pending' | 'completed' | 'failed';
  code: string;
  message: string;
}
