import path from 'node:path';
import { access, mkdir, cp } from 'node:fs/promises';

const copy = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    const folderCopyPath = path.join(import.meta.dirname, 'files_copy');
    try {
        await access(folderPath);
        await mkdir(folderCopyPath);
        await cp(folderPath, folderCopyPath, { recursive: true });
    }
    catch (error) {
        if (error.code === 'EEXIST' || error.code === 'ENOENT') {
            throw new Error ('FS operation failed');
        }
        else { throw error };
    }
};

await copy();
