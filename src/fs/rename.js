import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');
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