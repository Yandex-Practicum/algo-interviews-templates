class Segment {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}


function getIntersection(firstSequence, secondSequence) {
    // your code goes here
    // answer for sample 1
    return [new Segment(1, 2), new Segment(4, 4), new Segment(5, 5)];
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
    const firstSequence = readSegments();
    const secondSequence = readSegments(); 
    const intersection = getIntersection(firstSequence, secondSequence);
    outputAnswer(intersection);  
}

function readSegments() {
    const n = readInt();
    let result = [];
    for (let i = 0; i < n; i++) {
        let segment = readArray();
        result.push(new Segment(segment.left, segment.right));
    }
    return result;
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

function outputAnswer(intersection) {
    for (let segment of intersection) {
        process.stdout.write(`${segment.left} ${segment.right}\n`);
    }
}