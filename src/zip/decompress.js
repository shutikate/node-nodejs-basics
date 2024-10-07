import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');
    const filePath = path.join(folderPath, 'archive.gz');
    pipeline (
        createReadStream(filePath),
        createGunzip(),
        createWriteStream(path.join(folderPath, 'fileToCompress.txt')),
        (err) => {
            if (err) {console.error(err)}
        }
    )
};

await decompress();