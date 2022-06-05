import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = __dirname + "/files/";
    try {
        await fs.promises.rename(folderPath + 'wrongFilename.txt', folderPath + 'properFilename.md');
    } catch (e) {
        throw Error('FS operation failed');
    }
};
rename();
