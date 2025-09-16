import { Module } from '@nestjs/common';
import { SpotController } from './spot.controller';
import { SpotService } from './spot.service';

@Module({
  controllers: [SpotController],
  providers: [SpotService],
})
export class SpotModule {}
