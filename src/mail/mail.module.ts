import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

//source - https://nest-modules.github.io/mailer/
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        //coming for ethereal -https://ethereal.email/ **fake smtp**
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'noelia.hettinger@ethereal.email',
          pass: '4hrtQzFw3jUkeQRsxd',
        },
      },
      defaults: {
        from: 'upskillorions@gmail.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
