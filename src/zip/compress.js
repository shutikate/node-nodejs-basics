import path from 'node:path';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');
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