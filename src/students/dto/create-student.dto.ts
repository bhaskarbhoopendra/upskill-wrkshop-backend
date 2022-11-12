import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly email: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly phone: number;
}