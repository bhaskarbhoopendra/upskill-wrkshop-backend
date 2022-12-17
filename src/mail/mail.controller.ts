import { Controller, Post, Query } from "@nestjs/common";
import { MailService } from "./mail.service";


@Controller('email')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('send')
    async sendEmail(@Query('email') email, @Query('name') name) {
        return await this.mailService.sendMail(email, name);
    }
}