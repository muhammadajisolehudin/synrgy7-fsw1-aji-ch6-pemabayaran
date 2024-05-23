"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const PUBLIC_DIR = path_1.default.join(__dirname, '../public');
const UPLOAD_DIR = path_1.default.join(PUBLIC_DIR, 'uploads');
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const id = Math.random().toString(36).substring(2, 15); // Generates a random string
        cb(null, `${id}${path_1.default.extname(file.originalname)}`);
    }
});
exports.default = (0, multer_1.default)({ storage });
