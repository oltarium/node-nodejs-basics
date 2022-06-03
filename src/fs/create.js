import fs from 'fs';

export const create = async () => {
    try {
        await fs.promises.writeFile("./files/fresh.txt", 'I am fresh and young', {flag: 'wx'})
    } catch (e) {
        throw Error('FS operation failed');
    }
};
