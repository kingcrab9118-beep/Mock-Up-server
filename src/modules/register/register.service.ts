// src/modules/register/register.service.ts
import { Injectable } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register-email.dto';
import { VerifyEmailDto } from './dto/register-email-verify.dto';
import { RegisterPhoneDto } from './dto/register-phone.dto';
import { VerifyPhoneDto } from './dto/register-phone-verify.dto';
import { da } from '@faker-js/faker';

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
      message: 'Success',
      data: { userId: 'mock-user-id-123' },
    };
  }

  verifyEmail(dto: VerifyEmailDto) {
    if (dto.verificationCode === '123456') {
      return { code: 0, message: 'Success' };
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
      message: 'Success',
      data: { userId: 'mock-user-id-456' },
    };
  }

  verifyPhone(dto: VerifyPhoneDto) {
    if (dto.otp === '482193') {
      return { code: 0, message: 'Success', data: { userId: 'mock-user-id-456' } };
    }
    return { code: 'INVALID_INPUT', message: 'Invalid or expired OTP' };
  }
}
