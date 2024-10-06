import path from 'node:path';
import { unlink } from 'node:fs/promises';

const remove = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');
    try {
        await unlink(filePath);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error ('FS operation failed');
        }
        else { throw error };
    }
};

await remove();