class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function isOnOneLine(points) {
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
    const n = readInt();
    const points = [];
    for (let i = 0; i < n; i++) {
        const coordinates = readArray();
        points.push(new Point(coordinates[0], coordinates[1]));
    }
    if (isOnOneLine(points)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
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