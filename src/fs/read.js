import path from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
    try {
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error ('FS operation failed');
        }
        else { throw error };
    }
};

await read();