// src/modules/register/dto/verify-phone.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyPhoneDto {
  @ApiProperty({ example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '482193', description: 'OTP code received via SMS' })
  @IsString()
  @IsNotEmpty()
  otp: string;
}
