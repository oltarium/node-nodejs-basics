import fs from 'fs';

export const remove = async () => {
    try {
        await fs.promises.unlink('./files/fileToRemove.txt');
    } catch (e) {
        throw Error('FS operation failed');
    }
};
