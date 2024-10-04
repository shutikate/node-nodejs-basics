import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { readFile } from 'node:fs/promises';
import './files/c.js';

const pathToFolderFiles = path.join(import.meta.dirname, 'files');

const readJson = async (file) => {
    try {
        const pathToFile = path.join(pathToFolderFiles, file);
        return JSON.parse(await readFile(pathToFile, { encoding: 'utf8' }));
    }
    catch (err) {
        throw err;
    }
}

const aJson = await readJson('a.json');
const bJson = await readJson('b.json');

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aJson;
} else {
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
