import { IsString } from 'class-validator';

export class Login2faVerifyDto {
  @IsString()
  totp: string;
}
