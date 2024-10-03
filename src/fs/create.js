import path from 'node:path';
import fs from 'node:fs/promises';

const create = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
    const filePath = path.join(folderPath, 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);
        throw new Error ('FS operation failed');
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, content);
        } else {
            throw error;
        }
    }
};

await create();
