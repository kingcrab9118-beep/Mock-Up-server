import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ImagePuzzleService } from './image-puzzle.service';

@ApiTags('Register')
@Controller('image-puzzle')
export class ImagePuzzleController {
  constructor(private readonly imagePuzzleService: ImagePuzzleService) {}

  @Post('request')
  requestImagePuzzle(@Body() body: any) {
    return this.imagePuzzleService.requestImagePuzzle(body);
  }
}
