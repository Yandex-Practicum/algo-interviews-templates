function getAllPeacefulCombinations(n) {
    // your code goes here
    // answer for sample 1
    return [[2, 4, 1, 3], [3, 1, 4, 2]];
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
    const combinations = getAllPeacefulCombinations(n);
    outputAnswer(combinations);
}

function outputAnswer(combinations) {
    process.stdout.write(`${combinations.length}\n`);
    for (let combination of combinations) {
        process.stdout.write(`${combination.join(' ')}\n`);
    }
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}