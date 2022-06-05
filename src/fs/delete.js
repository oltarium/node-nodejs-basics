import fs from 'fs';
import path from "path";
import {fileURLToPath} from "url";

export const remove = async () => {
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        await fs.promises.unlink(__dirname + '/files/fileToRemove.txt');
    } catch (e) {
        throw Error('FS operation failed');
    }
};
remove();
