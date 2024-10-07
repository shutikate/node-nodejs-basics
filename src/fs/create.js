import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, writeFile } from 'node:fs/promises';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');
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
