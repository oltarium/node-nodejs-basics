import zlib from 'zlib'
import fs from 'fs';

export const compress = async () => {
    const zip = zlib.createGzip();
    const input = fs.createReadStream('./files/fileToCompress.txt');
    const output = fs.createWriteStream('./files/archive.gz');
    input.pipe(zip).pipe(output);
};
