import { createHash } from 'crypto';
import { readFileSync } from 'fs';

export const calculateHash = async () => {
    const fileContent = readFileSync('./files/fileToCalculateHashFor.txt');
    return createHash('sha256').update(fileContent).digest('hex');
};
