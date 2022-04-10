const IPV4 = "IPv4";
const IPV6 = "IPv6";
const ERROR = "Error";

function checkIpAddress(ip) {
    // your code goes here
    return ERROR;
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
    const ip = readLine();
    console.log(checkIpAddress(ip));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}