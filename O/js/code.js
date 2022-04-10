class Building {
    constructor(needCapital, addedCapital) {
        this.needCapital = needCapital;
        this.addedCapital = addedCapital;
    }
}

function getMaxFinalCapital(buildings, startCapital, maxNumberOfBuildings) {
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
    const nAndK = readArray();
    const n = nAndK[0];
    const k = nAndK[1];
    const buildings = readBuildings(n);
    const M = readInt();
    console.log(getMaxFinalCapital(buildings, M, k));    
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

function readBuildings(n) {
    let buildings = [];
    for (let i = 0; i < n; i++) {
        let parameters = readArray();
        buildings.push(new Building(parameters[0], parameters[1]));
    } 
    return buildings;
}