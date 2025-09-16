export class WithdrawVerifyRequestDto {
  withdrawId: string;
  twofaCode: string;
}

export class WithdrawVerifyResponseDto {
  status: 'verified' | 'failed';
  code: string;
  message: string;
}
