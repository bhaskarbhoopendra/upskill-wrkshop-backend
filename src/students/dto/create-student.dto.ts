import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;
  
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1000000000)
  @Max(9999999999)
  readonly phoneNumber: number;
}
