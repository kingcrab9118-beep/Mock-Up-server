import { LoginPhoneDto } from './dto/login-phone.dto';
import { LoginPhoneVerifyDto } from './dto/login-phone-verify.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { LoginEmailDto } from './dto/login-email.dto';
import { VerifyLoginEmailDto } from './dto/login-email-verify.dto';
import { Login2faVerifyDto } from './dto/login-2fa-verify.dto';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  // email
  @Post('email')
  @ApiResponse({ status: 200, description: 'Login successful, verification may be required', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid credentials', type: ErrorResponseDto })
  async loginWithEmail(@Body() dto: LoginEmailDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.email === 'user@example.com' && dto.password === 'Str0ngP@ssword!') {
      return {
        code: 0,
        message: 'Verification email sent. Please check your inbox.',
        data: { userId: '1234-1234-1234-1234' }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }
  // email/verify
  @Post('email/verify')
  @ApiResponse({
    status: 200,
    description: 'email verify success response',
    schema: {
      example: {
        code: 0,
        message: 'Success',
        data: {
          isRequire2fa: true,
          accessToken: 'string',
          refreshToken: 'string'
        }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Invalid or expired code', type: ErrorResponseDto })
  async verifyLoginEmail(@Body() dto: VerifyLoginEmailDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.email === 'user@example.com' && dto.verificationCode === '482193') {
      return {
        code: 0,
        message: 'Success',
        data: {
          isRequire2fa: true,
          accessToken: 'string',
          refreshToken: 'string'
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }
  // 2fa-verify
  @Post('2fa-verify')
  @ApiResponse({
    status: 200,
    description: '2fa verify success response',
    schema: {
      example: {
        code: 0,
        message: 'Success',
        data: {
          accessToken: 'string',
          refreshToken: 'string'
        }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Invalid or expired code', type: ErrorResponseDto })
  async verify2fa(@Body() dto: Login2faVerifyDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.totp === '482193') {
      return {
        code: 0,
        message: 'Success',
        data: {
          accessToken: 'string',
          refreshToken: 'string'
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }
  // phone
  @Post('phone')
  @ApiResponse({
    status: 200,
    description: 'OTP sent successfully',
    schema: {
      example: {
        code: 0,
        message: 'Verification SMS sent. Please check your phone.',
        data: { userId: '1234-1234-1234-1234' }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Invalid phone number', type: ErrorResponseDto })
  async loginWithPhone(@Body() dto: LoginPhoneDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.phone === '+1234567890' && dto.password === 'Str0ngP@ssword!') {
      return {
        code: 0,
        message: 'Verification SMS sent. Please check your phone.',
        data: { userId: '1234-1234-1234-1234' }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }
  // phone/verify
  @Post('phone/verify')
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: {
      example: {
        code: 0,
        message: 'Verification email sent. Please check your inbox.',
        data: {
          isRequire2fa: true,
          accessToken: 'string',
          refreshToken: 'string'
        }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP', type: ErrorResponseDto })
  async verifyPhone(@Body() dto: LoginPhoneVerifyDto): Promise<CommonResponseDto | ErrorResponseDto> {
    if (dto.phone === '+1234567890' && dto.otp === '482193') {
      return {
        code: 0,
        message: 'Verification email sent. Please check your inbox.',
        data: {
          isRequire2fa: true,
          accessToken: 'string',
          refreshToken: 'string'
        }
      };
    } else {
      return {
        code: 'INVALID_INPUT',
        message: 'Error Message'
      };
    }
  }
  // passkey
  @Post('passkey')
  @ApiResponse({ status: 200, description: 'OK' })
  async passkeyLogin(): Promise<{ code: number; message: string }> {
    return { code: 0, message: 'Passkey login initiated.' };
  }
  // passkey/verify
  @Post('passkey/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async passkeyVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } };
  }
  // telegram
  @Post('telegram')
  @ApiResponse({ status: 200, description: 'OK' })
  async telegramLogin(): Promise<{ code: number; message: string }> {
    return { code: 0, message: 'Telegram login initiated.' };
  }
  // telegram/verify
  @Post('telegram/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async telegramVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } };
  }
  // metamask
  @Post('metamask')
  @ApiResponse({ status: 200, description: 'OK' })
  async metamaskLogin(): Promise<{ code: number; message: string }> {
    return { code: 0, message: 'Metamask login initiated.' };
  }
  // metamask/verify
  @Post('metamask/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async metamaskVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } };
  }
}