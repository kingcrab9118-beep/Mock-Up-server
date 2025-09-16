import { Injectable } from '@nestjs/common';
import { CommonResponseDto } from 'modules/common/dto/common-response.dto';

@Injectable()
export class ImagePuzzleService {
  requestImagePuzzle(body: any): CommonResponseDto {
    return {
      code: 0,
      message: 'Image puzzle data',
      data: {}
    };
  }
}
