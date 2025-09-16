import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';

@ApiTags('Wallet APIs')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get('balance')
  getBalance(@Query() query: any) {
    return this.walletService.getBalance(query);
  }

  @Get('deposit/address')
  getDepositAddress(@Query() query: any) {
    return this.walletService.getDepositAddress(query);
  }

  @Get('deposit/histories')
  getDeposithistories(@Query() query: any) {
    return this.walletService.getDeposithistories(query);
  }

  @Post('withdraw')
  withdraw(@Body() dto: any) {
    return this.walletService.withdraw(dto);
  }

  @Post('withdraw/verify')
  verifyWithdraw(@Body() dto: any) {
    return this.walletService.verifyWithdraw(dto);
  }

  @Get('withdraw/histories')
  getWithdrawhistories(@Query() query: any) {
    return this.walletService.getWithdrawhistories(query);
  }

  @Post('transfer')
  transfer(@Body() dto: any) {
    return this.walletService.transfer(dto);
  }
}
