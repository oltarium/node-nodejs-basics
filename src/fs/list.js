import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const list = async () => {
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const files = fs.readdirSync(__dirname + '/files');
        console.log(files);
    } catch (e) {
        throw Error('FS operation failed');
    }
};
list();
