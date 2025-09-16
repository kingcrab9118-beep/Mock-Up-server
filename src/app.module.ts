import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [RegisterModule, LoginModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
