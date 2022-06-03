export const parseArgs = () => {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        console.log(`${propName} is ${args[i + 1]}`);
    }
};
