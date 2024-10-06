import path from 'node:path';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childPath = path.join(import.meta.dirname, 'files', 'script.js');
    const child = fork(childPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
