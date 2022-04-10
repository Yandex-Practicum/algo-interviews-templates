function convertToGoodString(probablyBadString) {
    // your code goes here
    return "";
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
    const probablyBadString = readLine();
    const ans = convertToGoodString(probablyBadString);
    console.log(ans);
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}
