import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';
import { TwoFaSetupDto } from './dto/2fa-setup.dto';
import { TwoFaVerifySetupDto } from './dto/2fa-verify-setup.dto';
import { VerifyTwoFaDto } from './dto/verify-2fa.dto';
import { ChangePasswordCodeDto } from './dto/change-password-code.dto';
import { ChangePasswordVerifyDto } from './dto/change-password-verify.dto';
import { ChangePasswordConfirmDto } from './dto/change-password-confirm.dto';
import { ForgetPasswordGetCodeDto } from './dto/forget-password-get-code.dto';
import { ForgetPasswordVerifyDto } from './dto/forget-password-verify.dto';
import { ForgetPasswordConfirmDto } from './dto/forget-password-confirm.dto';
import { UpdateUsernameDto } from './dto/update-username.dto';
import { TokenRefreshDto } from './dto/token-refresh.dto';
import { DeactivateAccountDto } from './dto/deactivate-account.dto';

@ApiTags('Account Management')
@Controller('account')
export class AccountController {
  // 2fa/setup
  @Post('2fa/setup')
  @ApiResponse({ status: 200, description: 'QR code and secret generated successfully', schema: { example: { qrCodeDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...', secret: 'JBSWY3DPEHPK3PXP' } } })
  @ApiResponse({ status: 401, description: 'Invalid or missing accessToken', type: ErrorResponseDto })
  async setup2fa(@Body() dto: TwoFaSetupDto): Promise<{ qrCodeDataUrl: string; secret: string }> {
    return { qrCodeDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...', secret: 'JBSWY3DPEHPK3PXP' };
  }
  // 2fa/verify-setup
  @Post('2fa/verify-setup')
  @ApiResponse({ status: 200, description: '2FA setup verified successfully', schema: { example: { message: '2FA setup complete. You can now use TOTP for login.' } } })
  @ApiResponse({ status: 400, description: 'Invalid or expired TOTP code', type: ErrorResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid or missing accessToken', type: ErrorResponseDto })
  async verify2faSetup(@Body() dto: TwoFaVerifySetupDto): Promise<{ message: string } | ErrorResponseDto> {
    if (dto.totpCode === '482193') {
      return { message: '2FA setup complete. You can now use TOTP for login.' };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }
  // verify/2fa
  @Post('verify/2fa')
  @ApiResponse({ status: 200, description: '2FA Successful', schema: { example: { '2faVerifiedToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' } } })
  @ApiResponse({ status: 400, description: 'Invalid or expired TOTP code', type: ErrorResponseDto })
  async verify2fa(@Body() dto: VerifyTwoFaDto): Promise<{ '2faVerifiedToken': string } | ErrorResponseDto> {
    if (dto.totpCode === '482193') {
      return { '2faVerifiedToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }
  // change-password/get-code
  @Post('change-password/get-code')
  @ApiResponse({ status: 200, description: 'Response', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid identifier', type: ErrorResponseDto })
  async getChangePasswordCode(@Body() dto: ChangePasswordCodeDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Change password code sent.' };
  }
  // change-password/verify
  @Post('change-password/verify')
  @ApiResponse({ status: 200, description: 'Change Password response', schema: { example: { code: 0, message: 'Success', data: { changePasswordToken: 'token' } } } })
  @ApiResponse({ status: 400, description: 'Invalid or expired token', type: ErrorResponseDto })
  async verifyChangePassword(@Body() dto: ChangePasswordVerifyDto): Promise<{ code: number; message: string; data: { changePasswordToken: string } } | ErrorResponseDto> {
    if (dto.code === 'valid') {
      return { code: 0, message: 'Success', data: { changePasswordToken: 'token' } };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }
  // change-password/confirm
  @Post('change-password/confirm')
  @ApiResponse({ status: 200, description: 'Response', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid reset-password token', type: ErrorResponseDto })
  async confirmChangePassword(@Body() dto: ChangePasswordConfirmDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Password changed successfully.' };
  }
  // forget-password/get-code
  @Post('forget-password/get-code')
  @ApiResponse({ status: 200, description: 'Response', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid identifier', type: ErrorResponseDto })
  async getForgetPasswordCode(@Body() dto: ForgetPasswordGetCodeDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Forget password code sent.' };
  }
  // forget-password/verify
  @Post('forget-password/verify')
  @ApiResponse({ status: 200, description: 'forget password response', schema: { example: { code: 0, message: 'Success', data: { changePasswordToken: 'token' } } } })
  @ApiResponse({ status: 400, description: 'Invalid or expired token', type: ErrorResponseDto })
  async verifyForgetPassword(@Query() dto: ForgetPasswordVerifyDto): Promise<{ code: number; message: string; data: { changePasswordToken: string } } | ErrorResponseDto> {
    if (dto.token === 'valid') {
      return { code: 0, message: 'Success', data: { changePasswordToken: 'token' } };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }
  // forget-password/confirm
  @Post('forget-password/confirm')
  @ApiResponse({ status: 200, description: 'Response', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid reset-password token', type: ErrorResponseDto })
  async confirmForgetPassword(@Body() dto: ForgetPasswordConfirmDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Password reset successfully.' };
  }
  // profile
  @Get('profile')
  @ApiResponse({ status: 200, description: 'Profile data', schema: { example: { code: 0, message: 'Success', data: { linkedEmail: 'user@example.com', linkedPhone: '+1234567890', isLinked2fa: 'true', linkedTelegram: 'telegramUser', isLinkedMetamask: 'true', linkedOauth: ['google', 'apple'] } } } })
  @ApiResponse({ status: 401, description: 'Invalid or missing access token', type: ErrorResponseDto })
  async getProfile(): Promise<{ code: number; message: string; data: any } | ErrorResponseDto> {
    return {
      code: 0,
      message: 'Success',
      data: {
        linkedEmail: 'user@example.com',
        linkedPhone: '+1234567890',
        isLinked2fa: 'true',
        linkedTelegram: 'telegramUser',
        isLinkedMetamask: 'true',
        linkedOauth: ['google', 'apple']
      }
    };
  }
  // update-username
  @Post('update-username')
  @ApiResponse({ status: 200, description: 'User logged out successfully', type: CommonResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid or missing access token', type: ErrorResponseDto })
  async updateUsername(@Body() dto: UpdateUsernameDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Username updated.' };
  }
  // token/refresh
  @Post('token/refresh')
  @ApiResponse({ status: 200, description: 'Refresh access token', schema: { example: { code: 0, message: 'Success', data: { refreshToken: 'def456refresh' } } } })
  async refreshToken(@Body() dto: TokenRefreshDto): Promise<{ code: number; message: string; data: { refreshToken: string } }> {
    return { code: 0, message: 'Success', data: { refreshToken: 'def456refresh' } };
  }
  // logout
  @Post('logout')
  @ApiResponse({ status: 200, description: 'User logged out successfully', type: CommonResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid or missing access token', type: ErrorResponseDto })
  async logout(): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'User logged out successfully.' };
  }
  // deactivate-account
  @Post('deactivate-account')
  @ApiResponse({ status: 200, description: 'User account deactivated', type: CommonResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid password or 2FA code', type: ErrorResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid or missing access token', type: ErrorResponseDto })
  async deactivateAccount(@Body() dto: DeactivateAccountDto): Promise<CommonResponseDto | ErrorResponseDto> {
    return { code: 0, message: 'Account deactivated.' };
  }
}
