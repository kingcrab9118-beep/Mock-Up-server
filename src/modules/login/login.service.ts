import { Injectable } from '@nestjs/common';
import { LoginEmailDto } from './dto/login-email.dto';
import { VerifyLoginEmailDto } from './dto/login-email-verify.dto';
import { Login2faVerifyDto } from './dto/login-2fa-verify.dto';
import { LoginPhoneDto } from './dto/login-phone.dto';
import { LoginPhoneVerifyDto } from './dto/login-phone-verify.dto';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';

@Injectable()
export class LoginService {
  loginWithEmail(dto: LoginEmailDto): CommonResponseDto | ErrorResponseDto {
    const randomDigits = (len: number) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');
    const randomUserId = randomDigits(4) + '-' + randomDigits(4) + '-' + randomDigits(4) + '-' + randomDigits(4);
    if (dto.email && dto.password) {
      return {
        code: 0,
        message: 'Success',
        data: {
          userId: randomUserId
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }

  verifyLoginEmail(dto: VerifyLoginEmailDto): CommonResponseDto | ErrorResponseDto {
    const randomToken = () => Math.random().toString(36).substring(2, 18);
    if (dto.email && dto.verificationCode) {
      return {
        code: 0,
        message: 'Success',
        data: {
          isRequire2fa: Math.random() > 0.5,
          accessToken: randomToken(),
          refreshToken: randomToken()
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }

  verify2fa(dto: Login2faVerifyDto): CommonResponseDto | ErrorResponseDto {
    const randomToken = () => Math.random().toString(36).substring(2, 18);
    if (dto.totp) {
      return {
        code: 0,
        message: 'Success',
        data: {
          accessToken: randomToken(),
          refreshToken: randomToken()
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }

  loginWithPhone(dto: LoginPhoneDto): CommonResponseDto | ErrorResponseDto {
    const randomDigits = (len: number) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');
    const randomUserId = randomDigits(4) + '-' + randomDigits(4) + '-' + randomDigits(4) + '-' + randomDigits(4);
    const randomPhone = '+1' + randomDigits(10);
    if (dto.phone && dto.password) {
      return {
        code: 0,
        message: 'Verification SMS sent. Please check your phone.',
        data: {
          userId: randomUserId
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }

  verifyPhone(dto: LoginPhoneVerifyDto): CommonResponseDto | ErrorResponseDto {
    if (dto.phone === '+1234567890' && dto.otp === '482193') {
      const randomToken = () => Math.random().toString(36).substring(2, 18);
      return {
        code: 0,
        message: 'Verification email sent. Please check your inbox.',
        data: {
          isRequire2fa: Math.random() > 0.5,   
          accessToken: randomToken(),
          refreshToken: randomToken()
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }

  passkeyLogin(): { code: number; message: string } {
    return {
      code: 0,
      message: 'Passkey login initiated.'
    };
  }

  passkeyVerify(): { code: number; message: string; data: { accessToken: string; refreshToken: string } } {
    const randomToken = () => Math.random().toString(36).substring(2, 18);
    return {
      code: 0,
      message: 'Success',
      data: {
        accessToken: randomToken(),
        refreshToken: randomToken()
      }
    };
  }

  telegramLogin(): { code: number; message: string } {
    return {
      code: 0,
      message: 'Telegram login initiated.'
    };
  }

  telegramVerify(): { code: number; message: string; data: { accessToken: string; refreshToken: string } } {
    const randomToken = () => Math.random().toString(36).substring(2, 18);
    return {
      code: 0,
      message: 'Success',
      data: {
        accessToken: randomToken(),
        refreshToken: randomToken()
      }
    };
  }

  metamaskLogin(): { code: number; message: string } {
    return {
      code: 0,
      message: 'Metamask login initiated.'
    };
  }

  metamaskVerify(): { code: number; message: string; data: { accessToken: string; refreshToken: string } } {
    const randomToken = () => Math.random().toString(36).substring(2, 18);
    return {
      code: 0,
      message: 'Success',
      data: {
        accessToken: randomToken(),
        refreshToken: randomToken()
      }
    };
  }
}