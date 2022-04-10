class HistoricalArray {
    // you can change signatures and set of methods as you like

    constructor(n) {
        // your code goes here
    }

    set(index, value) {
        // your code goes here
    }   

    beginNewEra(eraId) {
        // your code goes here
    }

    get(index, eraId) {
        // your code goes here
        return 0;
    } 
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
    const array = new HistoricalArray(n);
    const q = readInt();
    for (let i = 0; i < q; i++) {
        const queryParts = readQuery();
        const queryType = queryParts[0];
        if (queryType == "set") {
            let index = Number(queryParts[1]);
            let value = Number(queryParts[2]);
            array.set(index, value);
        } else if (queryType.equals("begin_new_era")) {
            let eraId = Number(queryParts[1]);
            array.beginNewEra(eraId);
        } else if (queryType.equals("get")) {
            let index = Number(queryParts[1]);
            let eraId = Number(queryParts[2]);
            writer.write( + "\n");
            process.stdout.write(`${array.get(index, eraId)}\n`);
        }
    }
}

function readQuery() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}