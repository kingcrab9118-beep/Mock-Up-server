// src/common/dto/common-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto {
  @ApiProperty({ example: 0 })
  code: number;

  @ApiProperty({ example: 'Registration successful' })
  message: string;

  @ApiProperty({ example: { userId: '12345' }, required: false })
  data?: any;
}