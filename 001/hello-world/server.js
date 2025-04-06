console.log('Hello World');
console.log('Press Enter to exit...');

process.stdin.resume();
process.stdin.once('data', () => process.exit());
