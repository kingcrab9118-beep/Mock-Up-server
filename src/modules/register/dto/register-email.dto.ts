// src/modules/register/dto/register-email.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class RegisterEmailDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

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
