import { Transform } from 'node:stream';

const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
          const reverseInput = chunk.toString().split('').reverse().join('');
          callback(null, reverseInput);
        },
    });
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();