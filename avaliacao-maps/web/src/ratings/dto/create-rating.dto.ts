import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @IsString()
  @IsNotEmpty()
  readonly teacher: string;

  @IsString()
  @IsNotEmpty()
  readonly student: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rating: number;

  @IsString()
  @IsNotEmpty()
  readonly positiveMessage: string;

  @IsString()
  @IsNotEmpty()
  readonly negativeMessage: string;
}
