import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const childPath = path.join(__dirname, 'files', 'script.js');
    fork(childPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
