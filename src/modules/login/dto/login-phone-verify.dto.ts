import { IsString } from 'class-validator';

export class LoginPhoneVerifyDto {
  @IsString()
  phone: string;

  @IsString()
  otp: string;
}
