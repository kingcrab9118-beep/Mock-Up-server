import { IsEmail, IsString } from 'class-validator';

export class VerifyLoginEmailDto {
  @IsEmail()
  email: string;

  @IsString()
  verificationCode: string;
}