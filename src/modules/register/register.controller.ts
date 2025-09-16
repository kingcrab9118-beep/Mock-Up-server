// src/modules/register/register.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';
import { RegisterEmailDto } from './dto/register-email.dto';
import { VerifyEmailDto } from './dto/register-email-verify.dto';
import { RegisterPhoneDto } from './dto/register-phone.dto';
import { VerifyPhoneDto } from './dto/register-phone-verify.dto';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
  @Post('email')
  @ApiResponse({ status: 200, description: 'Registration ', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input', type: ErrorResponseDto })
  async registerWithEmail(@Body() dto: RegisterEmailDto): Promise<CommonResponseDto> {
    // Mock response
    if (!dto.agreeToTermsOfService) {
      return {
        success: false,
        message: 'You must agree to the Terms of Service',
      } as any;
    }

    return {
      code: 0,
      message: 'Verification email sent. Please check your inbox.',
      data: { userId: 'mock-user-id-123' },
    };
  }

  @Post('email/verify')
  @ApiResponse({ status: 200, description: 'Email verified successfully', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired code', type: ErrorResponseDto })
  async verifyEmail(@Body() dto: VerifyEmailDto): Promise<CommonResponseDto | ErrorResponseDto> {
    // Mock logic: always succeed for demonstration
    if (dto.verificationCode === '123456') {
      return { 
        code: 0, message: 'Verification email sent. Please check your inbox.' 
      };
    }
    else {
      return { 
        code: "INVALID_INPUT", message: 'Error Message' 
      };
    }
  }
  
  @Post('phone')
  @ApiResponse({ status: 200, description: 'SMS sent ...', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input', type: ErrorResponseDto })
  async registerWithPhone(@Body() dto: RegisterPhoneDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (!dto.agreeToTermsOfService) {
      return {
        code: 'INVALID_INPUT',
        message: 'You must agree to the Terms of Service',
      };
    }

    return {
      code: 0,
      message: 'Verification email sent. Please check your inbox.',
    };
  }

  @Post('phone/verify')
  @ApiResponse({ status: 200, description: 'Phone verified successfully', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP', type: ErrorResponseDto })
  async verifyPhone(@Body() dto: VerifyPhoneDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.otp === '482193') {
      return {
        code: 0,
        message: 'Verification email sent. Please check your inbox.',
      };
    }

    return {
      code: 'INVALID_INPUT',
      message: 'Invalid or expired OTP',
    };
  }
}
