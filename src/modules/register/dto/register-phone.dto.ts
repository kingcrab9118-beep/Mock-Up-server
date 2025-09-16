// src/modules/register/dto/register-phone.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class RegisterPhoneDto {
  @ApiProperty({ example: '+1234567890' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'Str0ngP@ssw0rd!' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'REF12345', required: false, nullable: true })
  @IsOptional()
  @IsString()
  referralCode?: string | null;

  @ApiProperty({
    example: true,
    description: 'Must be true to proceed with registration',
  })
  @IsBoolean()
  agreeToTermsOfService: boolean;
}
