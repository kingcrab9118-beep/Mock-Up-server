export class WithdrawVerifyRequestDto {
  withdrawId: string;
  twofaCode: string;
}

export class WithdrawVerifyResponseDto {
  code: string;
  message: string;
}
