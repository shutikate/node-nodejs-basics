import path from 'node:path';
import { access, writeFile } from 'node:fs/promises';

const create = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    const filePath = path.join(folderPath, 'fresh.txt');
    const content = 'I am fresh and young';
    try {
        await access(filePath);
        throw new Error ('FS operation failed');
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(filePath, content);
        }
        else { throw error };
    }
};

await create();
