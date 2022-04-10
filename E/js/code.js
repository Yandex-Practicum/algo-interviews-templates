function convertToArabic(romanNumber) {
    // your code goes here
    return -1;
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
    const romanNumber = readLine();
    const ans = convertToArabic(romanNumber);
    console.log(ans);    
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}
