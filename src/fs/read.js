import path from 'node:path';
import fs from 'node:fs/promises';

const read = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

    try {
        const content = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    }
    catch {
        throw new Error ('FS operation failed');
    }
};

await read();