import path from 'node:path';
import { createReadStream } from 'node:fs';
import os from 'node:os';

const read = async () => {
    const filePath = path.join(import.meta.dirname, './files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.pipe(process.stdout);
    readStream.on('end', () => process.stdout.write(os.EOL));
};

await read();