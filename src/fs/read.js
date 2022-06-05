import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const read = async () => {
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const content = await fs.promises.readFile(__dirname + '/files/fileToRead.txt', {encoding: 'utf-8'});
        console.log(content);
    } catch (e) {
        throw Error('FS operation failed');
    }
};
read();
