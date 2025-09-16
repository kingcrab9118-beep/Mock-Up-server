export class TransferRequestDto {
  fromWallet: 'spot' | 'futures';
  toWallet: 'spot' | 'futures';
  currency: string;
  amount: number;
}

export class TransferResponseDto {
  fromWalletBalance: number;
  toWalletBalance: number;
  code: number;
  message: string;
}
