import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(studentFullName: string, studentEmail: string) {
    await this.mailerService.sendMail({
      to: `${studentEmail}`,
      subject: `Welcome to Upskill Orions ${studentFullName}`,
      template: './confirmation',
      context: {
        name: studentFullName,
      },
    });
  }
}
