function getLongestIncreasingPath(matrix) {
    // your code goes here
    return 0;
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
    const matrix = readMatrix();
    const ans = getLongestIncreasingPath(matrix);
    console.log(ans);    
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

function readMatrix() {
    let sizes = readArray();
    let n = sizes[0];
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readArray());
    }
    return matrix;
}