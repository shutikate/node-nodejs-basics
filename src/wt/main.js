import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
    const numberOfHostMachine = os.cpus().length;
    const filePath = path.join(import.meta.dirname, 'worker.js');
    const workers = [];
    for (let i = 0; i < numberOfHostMachine; i++) {
        const worker = new Worker(filePath, {
            workerData: i + 10
        })

        workers.push(new Promise((resolve, reject) => {
            worker.on('message', (message) => resolve({status: 'resolved', data: message}));
            worker.on('error', () => reject({status: 'error', data: null}));
        }))
    }
    const result = await Promise.allSettled(workers);
    console.log(result.map((el) => el.value || el.reason));
};

await performCalculations();