import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowed = /jpeg|jpg|png|webp|heic|gif/;
  const isImage = allowed.test(path.extname(file.originalname).toLowerCase()) || file.mimetype.startsWith('image/');
  const isDoc = /pdf|doc|docx/.test(path.extname(file.originalname).toLowerCase()) || file.mimetype.includes('pdf') || file.mimetype.includes('msword') || file.mimetype.includes('officedocument');
  
  if (isImage || isDoc) cb(null, true);
  else cb(new Error('Invalid file type. Only standard image and document formats are supported.'));
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB per file
});
