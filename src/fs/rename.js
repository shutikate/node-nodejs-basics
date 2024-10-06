import path from 'node:path';
import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    try {
        await renameFile(path.join(folderPath, 'wrongFilename.txt'), path.join(folderPath, 'properFilename.md'));
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error ('FS operation failed');
        }
        else { throw error };
    }
};

await rename();