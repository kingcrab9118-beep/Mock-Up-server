export class WithdrawRequestDto {
  currency: string;
  amount: number;
  address: string;
  network?: string;
  memo?: string;
}

export class WithdrawResponseDto {
  data: {
  withdrawId: string;
  balance: number;
  }
  code: number;
  message: string;
}
