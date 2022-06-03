import fs from 'fs';

export const read = async () => {
   try {
       const content = await fs.promises.readFile('./files/fileToRead.txt', {encoding: 'utf-8'});
       console.log(content);
   } catch (e) {
       throw Error('FS operation failed');
   }
};
