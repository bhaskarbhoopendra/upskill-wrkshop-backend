import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { DiskStorage } from 'utils/diskStorage';

@Module({
  controllers: [FilesController],
  providers: [FilesService,DiskStorage]
})
export class FilesModule {}
