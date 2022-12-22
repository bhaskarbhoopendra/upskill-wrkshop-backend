import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './students/schema/students.schema';
import { StudentController } from './students/students.controller';
import { StudentService } from './students/students.service';
import { FilesModule } from './files/files.module';
import { FilesController } from './files/files.controller';
import { FilesService } from './files/files.service';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    FilesModule,
    MulterModule.register({ dest: './uploads'})
  ],
  controllers: [AppController, StudentController, FilesController],
  providers: [AppService, StudentService, FilesService],
})
export class AppModule {}
