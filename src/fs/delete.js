import path from 'node:path';
import fs from 'node:fs/promises';

const remove = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);
    }
    catch {
        throw new Error ('FS operation failed');
    }
};

await remove();