// src/modules/register/register.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';
import { RegisterEmailDto } from './dto/register-email.dto';
import { VerifyEmailDto } from './dto/register-email-verify.dto';
import { RegisterPhoneDto } from './dto/register-phone.dto';
import { VerifyPhoneDto } from './dto/register-phone-verify.dto';
import { RegisterService } from './register.service';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  // 1. Email registration
  @Post('email')
  @ApiResponse({ status: 200, description: 'Registration ', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input', type: ErrorResponseDto })
  registerWithEmail(@Body() dto: RegisterEmailDto): CommonResponseDto {
    return this.registerService.registerWithEmail(dto);
  }

  // 2. Email verification
  @Post('email/verify')
  @ApiResponse({ status: 200, description: 'Email verified successfully', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired code', type: ErrorResponseDto })
  verifyEmail(@Body() dto: VerifyEmailDto): CommonResponseDto | ErrorResponseDto {
    return this.registerService.verifyEmail(dto);
  }

  // 3. Phone registration
  @Post('phone')
  @ApiResponse({ status: 200, description: 'SMS sent ...', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input', type: ErrorResponseDto })
  registerWithPhone(@Body() dto: RegisterPhoneDto): CommonResponseDto | ErrorResponseDto {
    return this.registerService.registerWithPhone(dto);
  }

  // 4. Phone verification
  @Post('phone/verify')
  @ApiResponse({ status: 200, description: 'Phone verified successfully', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP', type: ErrorResponseDto })
  verifyPhone(@Body() dto: VerifyPhoneDto): CommonResponseDto | ErrorResponseDto {
    return this.registerService.verifyPhone(dto);
  }
}
