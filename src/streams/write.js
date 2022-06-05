import fs from 'fs';
import {fileURLToPath} from "url";
import path from "path";

export const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const stream = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');
    process.stdin.on('data', data => {
        if (data.toString().trim() === "exit") {
            stream.end();
            process.exit(1);
        }
        stream.write(data);
    });
};
write();
