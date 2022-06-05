import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = `${__dirname}/files/`;
    const distPath = `${__dirname}/files_copy/`;

    const sourceFolderExists = fs.existsSync(sourcePath);
    const distFolderExists = fs.existsSync(distPath);
    if (!sourceFolderExists || distFolderExists) {
        throw Error('FS operation failed');
    }
    fs.mkdirSync(distPath);
    fs.readdirSync(sourcePath).forEach((file) => {
        fs.copyFileSync(sourcePath + file, distPath + file);
    });
};
copy();
