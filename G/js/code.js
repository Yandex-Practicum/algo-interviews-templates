class Vertex {
    constructor(weight, parent) {
        this.weight = weight;
        this.parent = parent;
    }
}

function getNumberOfUpgoingPaths(tree, x) {
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
    const firsLine = readArray();
    const n = firsLine[0];
    const x = firsLine[1];
    const tree = readTree(n);
    const ans = getNumberOfUpgoingPaths(tree, x);
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

function readTree(n) {
    let tree = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        tree.push(new Vertex(vertex[1], vertex[0]));
    }
    return tree;
}