import path from 'node:path';
import fs from 'node:fs/promises';

const copy = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    const folderCopyPath = path.join(import.meta.dirname, 'files_copy');
    
    try {
        const folderContent = await fs.readdir(folderPath);
        await fs.mkdir(folderCopyPath);
        for (const file of folderContent) {
            await fs.copyFile(path.join(folderPath, file), path.join(folderCopyPath, file));
        }
    }
    catch {
        throw new Error ('FS operation failed');
    }
};

await copy();
