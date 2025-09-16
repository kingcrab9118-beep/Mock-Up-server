import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TwoFaSetupDto } from './dto/2fa-setup.dto';
import { TwoFaVerifySetupDto } from './dto/2fa-verify-setup.dto';
import { VerifyTwoFaDto } from './dto/verify-2fa.dto';
import { ChangePasswordCodeDto } from './dto/change-password-code.dto';
import { AccountService } from './account.service';
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
  constructor(private readonly accountService: AccountService) {}

  @Post('2fa/setup')
  async setup2fa(@Body() dto: TwoFaSetupDto) {
    return this.accountService.setup2fa(dto);
  }

  @Post('2fa/verify-setup')
  async verify2faSetup(@Body() dto: TwoFaVerifySetupDto) {
    return this.accountService.verify2faSetup(dto);
  }

  @Post('verify/2fa')
  async verify2fa(@Body() dto: VerifyTwoFaDto) {
    return this.accountService.verify2fa(dto);
  }


  @Post('change-password/get-code')
  async getChangePasswordCode(@Body() dto: ChangePasswordCodeDto) {
    return this.accountService.getChangePasswordCode(dto);
  }

  @Post('change-password/verify')
  async verifyChangePassword(@Body() dto: ChangePasswordVerifyDto) {
    return this.accountService.verifyChangePassword(dto);
  }

  @Post('change-password/confirm')
  async confirmChangePassword(@Body() dto: ChangePasswordConfirmDto) {
    return this.accountService.confirmChangePassword(dto);
  }

  @Post('forget-password/get-code')
  async getForgetPasswordCode(@Body() dto: ForgetPasswordGetCodeDto) {
    return this.accountService.getForgetPasswordCode(dto);
  }

  @Post('forget-password/verify')
  async verifyForgetPassword(@Query() dto: ForgetPasswordVerifyDto) {
    return this.accountService.verifyForgetPassword(dto);
  }

  @Post('forget-password/confirm')
  async confirmForgetPassword(@Body() dto: ForgetPasswordConfirmDto) {
    return this.accountService.confirmForgetPassword(dto);
  }

  @Get('profile')
  async getProfile() {
    return this.accountService.getProfile();
  }

  @Post('update-username')
  async updateUsername(@Body() dto: UpdateUsernameDto) {
    return this.accountService.updateUsername(dto);
  }

  @Post('token/refresh')
  async refreshToken(@Body() dto: TokenRefreshDto) {
    return this.accountService.refreshToken(dto);
  }

  @Post('logout')
  async logout() {
    return this.accountService.logout();
  }

  @Post('deactivate-account')

  async deactivateAccount(@Body() dto: DeactivateAccountDto) {
    return this.accountService.deactivateAccount(dto);
  }
}
