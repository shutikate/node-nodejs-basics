import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, mkdir, cp } from 'node:fs/promises';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');
    const folderCopyPath = path.join(__dirname, 'files_copy');
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
