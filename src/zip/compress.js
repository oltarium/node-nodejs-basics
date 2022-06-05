import zlib from 'zlib'
import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const zip = zlib.createGzip();
    const input = fs.createReadStream(__dirname + '/files/fileToCompress.txt');
    const output = fs.createWriteStream(__dirname + '/files/archive.gz');
    input.pipe(zip).pipe(output);
};
compress();
