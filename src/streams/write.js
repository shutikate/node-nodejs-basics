import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import os from 'node:os';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    const rl = createInterface(process.stdin);
    rl.on('line', (data) => writeStream.write(`${data}${os.EOL}`));
};

await write();