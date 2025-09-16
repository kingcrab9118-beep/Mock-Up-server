import { IsString, IsNotEmpty } from 'class-validator';

export class LoginPhoneDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsNotEmpty()
  imagePuzzleSolution: object;
}
