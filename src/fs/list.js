import fs from 'fs';

export const list = async () => {
    try {
        const files = fs.readdirSync('./files');
        console.log(files);
    } catch (e) {
        throw Error('FS operation failed');
    }
};
