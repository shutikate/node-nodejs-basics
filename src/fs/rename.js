import path from 'node:path';
import fs from 'node:fs/promises';

const rename = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');

    try {
        await fs.rename(path.join(folderPath, 'wrongFilename.txt'), path.join(folderPath, 'properFilename.md'));
    }
    catch {
        throw new Error ('FS operation failed');
    }
};

await rename();