import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import os from 'node:os';

const calculateHash = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    const hash = createHash('sha256');
    readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
    readStream.on('end', () => process.stdout.write(os.EOL));
};

await calculateHash();