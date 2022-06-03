import fs from 'fs';

export const write = async () => {
  const stream = fs.createWriteStream('./files/fileToWrite.txt');
   process.stdin.on('data', data => {
       if (data.toString().trim() === "exit") {
           stream.end();
           process.exit(1);
       }
       stream.write(data);
   });
};
