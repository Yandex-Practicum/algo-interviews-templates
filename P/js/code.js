class Vertex {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

function getTreeBorder(tree, root) {
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

function readTree(n) {
    const tree = [];
    for (let i = 0; i < n; i++) {
        const leftAndRight = readArray();
        tree.push(new Vertex(leftAndRight[0], leftAndRight[1]));
    }
    return tree;
}

function solve() {
    const firstLine = readArray();
    const n = firstLine[0];
    const root = firstLine[1];
    const tree = readTree(n);
    outputAnswer(getTreeBorder(tree, root));
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

function outputAnswer(border) {
    process.stdout.write(`${border.join(' ')}`);
}