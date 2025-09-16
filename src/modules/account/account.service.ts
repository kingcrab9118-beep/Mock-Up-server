import { Injectable } from '@nestjs/common';
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
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';
import { ErrorResponseDto } from 'modules/common/dto/error-response.dto';

@Injectable()
export class AccountService {
  setup2fa(dto: TwoFaSetupDto): { qrCodeDataUrl: string; secret: string } {
    return { qrCodeDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...', secret: 'JBSWY3DPEHPK3PXP' };
  }

  verify2faSetup(dto: TwoFaVerifySetupDto): { message: string } | ErrorResponseDto {
    if (dto.totpCode === '482193') {
      return { message: '2FA setup complete. You can now use TOTP for login.' };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }

  verify2fa(dto: VerifyTwoFaDto): { '2faVerifiedToken': string } | ErrorResponseDto {
    if (dto.totpCode === '482193') {
      return { '2faVerifiedToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }

  getChangePasswordCode(dto: ChangePasswordCodeDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Change password code sent.' };
  }

  verifyChangePassword(dto: ChangePasswordVerifyDto): { code: number; message: string; data: { changePasswordToken: string } } | ErrorResponseDto {
    if (dto.code === 'valid') {
      return { code: 0, message: 'Success', data: { changePasswordToken: 'token' } };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }

  confirmChangePassword(dto: ChangePasswordConfirmDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Password changed successfully.' };
  }

  getForgetPasswordCode(dto: ForgetPasswordGetCodeDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Forget password code sent.' };
  }

  verifyForgetPassword(dto: ForgetPasswordVerifyDto): { code: number; message: string; data: { changePasswordToken: string } } | ErrorResponseDto {
    if (dto.token === 'valid') {
      return { code: 0, message: 'Success', data: { changePasswordToken: 'token' } };
    } else {
      return { code: 'INVALID_INPUT', message: 'Error Message' };
    }
  }

  confirmForgetPassword(dto: ForgetPasswordConfirmDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Password reset successfully.' };
  }

  getProfile(): { code: number; message: string; data: any } | ErrorResponseDto {
  // Generate random phone number, Telegram ID, email, Oauth, etc.
    const randomDigits = (len: number) => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');
    const randomPhone = '+1' + randomDigits(10);
    const randomTelegram = 'tg_' + randomDigits(8);
    const randomEmail = `user${randomDigits(4)}@gmail.com`;
    const oauthProviders = ['google', 'apple', 'kakao', 'naver', 'facebook'];
    const randomOauth = oauthProviders.sort(() => 0.5 - Math.random()).slice(0, 2);

    return {
      code: 0,
      message: 'Success',
      data: {
        linkedEmail: randomEmail,
        linkedPhone: randomPhone,
        isLinked2fa: Math.random() > 0.5 ? 'true' : 'false',
        linkedTelegram: randomTelegram,
        isLinkedMetamask: Math.random() > 0.5 ? 'true' : 'false',
        linkedOauth: randomOauth
      }
    };
  }

  updateUsername(dto: UpdateUsernameDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Username updated.' };
  }

  refreshToken(dto: TokenRefreshDto): { code: number; message: string; data: { refreshToken: string } } {
    return { code: 0, message: 'Success', data: { refreshToken: 'def456refresh' } };
  }

  logout(): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'User logged out successfully.' };
  }

  deactivateAccount(dto: DeactivateAccountDto): CommonResponseDto | ErrorResponseDto {
    return { code: 0, message: 'Account deactivated.' };
  }
}
