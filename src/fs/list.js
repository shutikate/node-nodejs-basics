import path from 'node:path';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    try {
        const folderContent = await readdir(folderPath);
        console.log(folderContent);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error ('FS operation failed');
        }
        else { throw error };
    }
};

await list();