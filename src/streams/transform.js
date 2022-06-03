import {Transform} from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const textChars = chunk.slice(0, chunk.length - 2);
            const reversed = textChars.reverse();
            const result = [...reversed, ...chunk.slice(chunk.length -2)]
            callback(null, Buffer.from(result));
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};
