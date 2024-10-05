import path from 'node:path';
import { createWriteStream } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import os from 'node:os';

const write = async () => {
    const filePath = path.join(import.meta.dirname, './files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    const rl = createInterface(process.stdin);
    rl.on('line', (data) => writeStream.write(`${data}${os.EOL}`));
};

await write();