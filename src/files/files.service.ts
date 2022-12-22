import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DiskStorage } from 'utils/diskStorage';

@Injectable()
export class FilesService {
}
