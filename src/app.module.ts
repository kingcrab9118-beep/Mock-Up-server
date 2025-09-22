import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { AccountModule } from './modules/account/account.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { MarketModule } from './modules/market/market.module';
import { SpotModule } from './modules/spot/spot.module';
import { FuturesModule } from './modules/futures/futures.module';
import { ImagePuzzleModule } from './modules/image-puzzle/image-puzzle.module';
import { WsMockModule } from './modules/websocket/websocket.module';

@Module({
  imports: [RegisterModule, LoginModule, AccountModule, WalletModule, MarketModule, SpotModule, FuturesModule, ImagePuzzleModule, WsMockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
