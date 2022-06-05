import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.createReadStream(__dirname + '/files/fileToRead.txt').pipe(process.stdout);
};
read();
