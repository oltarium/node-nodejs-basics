import fs from 'fs';

export const copy = async () => {
    const sourceFolderExists = fs.existsSync('./files');
    const distFolderExists = fs.existsSync('./files_copy');
    if (!sourceFolderExists || distFolderExists) {
        throw Error('FS operation failed');
    }
    fs.mkdirSync('./files_copy');
    fs.readdirSync('./files').forEach((file) => {
        fs.copyFileSync('./files/' + file, './files_copy/' + file);
    });
};
