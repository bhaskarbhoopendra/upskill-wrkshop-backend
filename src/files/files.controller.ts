import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DiskStorage } from 'utils/diskStorage';
import { FilesService } from './files.service';

@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService, private readonly diskStorage: DiskStorage) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
  })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file)
    return "File Upload API"
  }
  
}
