import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { LoginEmailDto } from './dto/login-email.dto';
import { VerifyLoginEmailDto } from './dto/login-email-verify.dto';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';

@ApiTags('Login')
@Controller('login')
export class LoginController {
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
}