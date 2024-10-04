import path from 'node:path';
import fs from 'node:fs/promises';

const list = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');

    try {
        const folderContent = await fs.readdir(folderPath);
        console.log(folderContent);
    }
    catch {
        throw new Error ('FS operation failed');
    }
};

await list();