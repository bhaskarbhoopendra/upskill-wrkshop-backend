import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './students.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private mailService: MailService,
  ) {}

  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent = await this.studentService.createStudent(
        createStudentDto,
      );
      if (newStudent) {
        const { name, email }: { name: string; email: string } = newStudent;
        await this.mailService.sendUserConfirmation(name, email);
      }
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newStudent,
      });
    } catch (err) {
      console.log({ err });
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }
}
