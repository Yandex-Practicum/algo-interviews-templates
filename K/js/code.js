function stringMatchesTemplate(stringToCheck, template) {
    // your code goes here
    return false;
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

    const template = readLine();
    const stringToCheck = readLine();

    if (stringMatchesTemplate(stringToCheck, template)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}


function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}