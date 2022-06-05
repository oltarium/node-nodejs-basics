import {createHash} from 'crypto';
import {readFileSync} from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileContent = readFileSync(__dirname + '/files/fileToCalculateHashFor.txt');
    return createHash('sha256').update(fileContent).digest('hex');
};
console.log(await calculateHash());
