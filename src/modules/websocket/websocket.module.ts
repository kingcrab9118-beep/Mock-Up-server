import { Module } from '@nestjs/common';
import { PrivateGateway } from './private.gateway';
import { PublicGateway } from './public.gateway';

@Module({
  providers: [PrivateGateway, PublicGateway],
})
export class WsMockModule {}
