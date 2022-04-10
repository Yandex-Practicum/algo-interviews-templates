function generateSequences(n) {
    // your code goes here
    return [];
}

const _readline = require('readline');


const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);


function solve() {
    const n = readInt();
    outputAnswer(generateSequences(n));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function outputAnswer(sequences) {
    for (let sequence of sequences) {
        process.stdout.write(`${sequence.join(' ')}\n`);
    }
}