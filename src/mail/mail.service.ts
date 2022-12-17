import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, fullName: string) {
    console.log(email)
    await this.mailerService.sendMail({
      to: `${email}`,
      subject: `Welcome to Upskill Orions ${fullName}`,
      template: './confirmation',
      context: {
        name: fullName,
      },
    });
  }
}