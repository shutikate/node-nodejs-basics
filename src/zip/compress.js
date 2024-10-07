import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files');
    const filePath = path.join(folderPath, 'fileToCompress.txt');
    pipeline (
        createReadStream(filePath),
        createGzip(),
        createWriteStream(path.join(folderPath, 'archive.gz')),
        (err) => {
            if (err) {console.error(err)}
        }
    )
};

await compress();