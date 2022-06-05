import {fork} from 'child_process';
import {fileURLToPath} from "url";
import path from "path";

export const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const options = {
        stdio: ['pipe', 'pipe', 'ipc']
    };
    const child = fork(__dirname + '/files/script.js', args, options);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

console.log(await spawnChildProcess([1, 2, 3]));
