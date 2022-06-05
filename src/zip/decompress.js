import fs from 'fs';
import zlib from 'zlib';
import {fileURLToPath} from "url";
import path from "path";

export const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream(__dirname + '/files/archive.gz');
    const output = fs.createWriteStream(__dirname +'/files/fileToCompress.txt');
    input.pipe(unzip).pipe(output);
};
decompress();
