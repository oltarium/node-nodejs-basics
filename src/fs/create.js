import fs from 'fs';
import path from "path";
import {fileURLToPath} from "url";

export const create = async () => {
    try {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        await fs.promises.writeFile(__dirname + "/files/fresh.txt", 'I am fresh and young', {flag: 'wx'})
    } catch (e) {
        throw Error('FS operation failed');
    }
};
create();
