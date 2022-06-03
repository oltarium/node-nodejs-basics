import {fork} from 'child_process';

export const spawnChildProcess = async (args) => {
    const options = {
        stdio: ['pipe', 'pipe', 'ipc']
    };
    const child = fork('./files/script.js', args, options);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};
