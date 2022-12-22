import { diskStorage } from "multer";
import { extname } from "path";

export class DiskStorage {
        disk = diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const uniqueSuffix =
          Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        return callback(null, filename)
        },
      })
}