// src/common/dto/error-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ example: 'INVALID_INPUT' })
  code: string;

  @ApiProperty({ example: 'Error Message' })
  message: string;
}
