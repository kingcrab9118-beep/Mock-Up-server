import { Module } from '@nestjs/common';
import { ImagePuzzleController } from './image-puzzle.controller';
import { ImagePuzzleService } from './image-puzzle.service';

@Module({
  controllers: [ImagePuzzleController],
  providers: [ImagePuzzleService],
})
export class ImagePuzzleModule {}
