import {Worker} from 'worker_threads';
import {cpus} from 'os';

const createWorker = (number) => {
    return new Promise(resolve => {
        const worker = new Worker("./worker.js", {workerData: {num: number}});
        worker.once("message", result => {
            resolve({
                status: 'resolved',
                data: result,
            });
        });
        worker.on("error", () => {
            resolve({
                status: 'error',
                data: null,
            })
        });
    })
}

export const performCalculations = async () => {
    const promises = [];
    for (let i = 0; i < cpus().length; i++) {
        promises.push(createWorker(10 + i));
    }
    return await Promise.all(promises);
};
