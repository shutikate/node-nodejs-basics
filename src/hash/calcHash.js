import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import os from 'node:os';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    const hash = createHash('sha256');
    readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
    readStream.on('end', () => process.stdout.write(os.EOL));
};

await calculateHash();