import { LoginPhoneDto } from './dto/login-phone.dto';
import { LoginPhoneVerifyDto } from './dto/login-phone-verify.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { LoginEmailDto } from './dto/login-email.dto';
import { VerifyLoginEmailDto } from './dto/login-email-verify.dto';
import { Login2faVerifyDto } from './dto/login-2fa-verify.dto';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';
import { LoginService } from './login.service';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('email')
  async loginWithEmail(@Body() dto: LoginEmailDto) {
    return this.loginService.loginWithEmail(dto);
  }

  @Post('email/verify')
  async verifyLoginEmail(@Body() dto: VerifyLoginEmailDto) {
    return this.loginService.verifyLoginEmail(dto);
  }

  @Post('2fa-verify')
  async verify2fa(@Body() dto: Login2faVerifyDto) {
    return this.loginService.verify2fa(dto);
  }

  @Post('phone')
  async loginWithPhone(@Body() dto: LoginPhoneDto) {
    return this.loginService.loginWithPhone(dto);
  }

  // 5. Phone verification
  @Post('phone/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Verification email sent. Please check your inbox.', data: { isRequire2fa: true, accessToken: 'string', refreshToken: 'string' } } } })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP', type: ErrorResponseDto })
  async verifyPhone(@Body() dto: LoginPhoneVerifyDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return this.loginService.verifyPhone(dto);
  }

  // 6. Passkey login
  @Post('passkey')
  @ApiResponse({ status: 200, description: 'OK' })
  async passkeyLogin(): Promise<{ code: number; message: string }> {
    return this.loginService.passkeyLogin();
  }

  // 7. Passkey verification
  @Post('passkey/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async passkeyVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return this.loginService.passkeyVerify();
  }

  // 8. Telegram login
  @Post('telegram')
  @ApiResponse({ status: 200, description: 'OK' })
  async telegramLogin(): Promise<{ code: number; message: string }> {
    return this.loginService.telegramLogin();
  }

  // 9. Telegram verification
  @Post('telegram/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async telegramVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return this.loginService.telegramVerify();
  }

  // 10. Metamask login
  @Post('metamask')
  @ApiResponse({ status: 200, description: 'OK' })
  async metamaskLogin(): Promise<{ code: number; message: string }> {
    return this.loginService.metamaskLogin();
  }

  // 11. Metamask verification
  @Post('metamask/verify')
  @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { code: 0, message: 'Success', data: { accessToken: 'string', refreshToken: 'string' } } } })
  async metamaskVerify(): Promise<{ code: number; message: string; data: { accessToken: string; refreshToken: string } }> {
    return this.loginService.metamaskVerify();
  }
}