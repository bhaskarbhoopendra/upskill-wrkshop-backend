import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phoneNumber: number;
}
