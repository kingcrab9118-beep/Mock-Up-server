export class DepositAddressQueryDto {
  currency: string;
  network: string;
}

export class DepositAddressResponseDto {
  code: number;
  message: string;
  data: {
    address: string;
  };
}
