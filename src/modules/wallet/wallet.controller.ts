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

  @Get('deposit/historys')
  getDepositHistorys(@Query() query: any) {
    return this.walletService.getDepositHistorys(query);
  }

  @Post('withdraw')
  withdraw(@Body() dto: any) {
    return this.walletService.withdraw(dto);
  }

  @Post('withdraw/verify')
  verifyWithdraw(@Body() dto: any) {
    return this.walletService.verifyWithdraw(dto);
  }

  @Get('withdraw/historys')
  getWithdrawHistorys(@Query() query: any) {
    return this.walletService.getWithdrawHistorys(query);
  }

  @Post('transfer')
  transfer(@Body() dto: any) {
    return this.walletService.transfer(dto);
  }
}
