// src/modules/register/register.service.ts
import { Injectable } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register-email.dto';
import { VerifyEmailDto } from './dto/register-email-verify.dto';
import { RegisterPhoneDto } from './dto/register-phone.dto';
import { VerifyPhoneDto } from './dto/register-phone-verify.dto';

@Injectable()
export class RegisterService {
  registerWithEmail(dto: RegisterEmailDto) {
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

  verifyEmail(dto: VerifyEmailDto) {
    if (dto.verificationCode === '123456') {
      return { code: 0, message: 'Verification email sent. Please check your inbox.' };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }

  registerWithPhone(dto: RegisterPhoneDto) {
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

  verifyPhone(dto: VerifyPhoneDto) {
    if (dto.otp === '482193') {
      return { code: 0, message: 'Verification email sent. Please check your inbox.' };
    }
    return { code: 'INVALID_INPUT', message: 'Invalid or expired OTP' };
  }
}
