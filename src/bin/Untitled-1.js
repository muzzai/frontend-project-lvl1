const stuff = {
    'guitar': {'weight': 1, 'cost': 1500},
    'laptop': {'weight': 2, 'cost': 2000},
    'boombox': {'weight': 4, 'cost': 3000},
    'necklace': {'weight': 0.25, 'cost': 1700},
    'beer': {'weight': 0.5, 'cost': 1000}
}
const backpack_size = 4;

const findMinimalCell = (stff) => {
    return Math.min.apply(null, Object.entries(stff).map(x => x[1]['weight']));
}

const minimalCell = findMinimalCell(stuff);
const makeCollumns = (minCell, bakp_s) => {
    const result = {};
    let cells = minCell
    while (cells <= bakp_s) {
        result[cells] = null;
        cells += minCell
    }
    return result;
};
const lines = Object.keys(stuff);
const makeTable = (lines) => {
    const result = [];
    for (let index = 0; index < lines.length; index++) {
        result.push(makeCollumns(minimalCell, backpack_size));
    }
    return result;
}
const table = makeTable(lines);

/* const fillTheTable = (table, lines, backpack_size) => {
    for (let index = 0; index < table.length; index++) {
        const currentStuffName = lines[index];
        const currentStuff = stuff[currentStuffName];
        const currentStuffCost = currentStuff['cost'];
        const currentStuffWeight = currentStuff['weight'];
        for (let j = minimalCell; j <= backpack_size; j += minimalCell) {
            if (index === 0 && currentStuffWeight <= j) {
                table['index']['j']['cost'] = currentStuffCost;
                table['index']['j']['stuff'] = currentStuffName;
            }
            if (index > 0) {
                const addingCost = j - currentStuffWeight < minimalCell ? 0 : table[index - 1][j - currentStuffWeight]['cost'];
                table[index][j]['cost'] = Math.max(table[index - 1]['j']['cost'], addingCost === 0 ? 0 : currentStuffCost + addingCost);


            }            
        }
    }
} */















const fillTheTable = (table, lines, backpack_size) => {
    for (let index = 0; index < table.length; index++) {
        const currentStuffName = lines[index];
        const currentStuff = stuff[currentStuffName];
        const currentCost = currentStuff['cost'];
        const currentWeight = currentStuff['weight'];
        for (let j = minimalCell; j <= backpack_size; j += minimalCell) {
            if (index === 0) {
                if (currentWeight <= j) {
                    table[index][j] = currentCost;
                }
            }
            if (index > 0) {
                const addingCost = (j - currentWeight) < minimalCell ? 0 : table[index - 1][j - currentWeight];
                console.log(`AddingCost = ${addingCost}`);
                console.log(currentStuffName);
                table[index][j] = Math.max(table[index - 1][j], addingCost === 0 ? 0 : addingCost + currentCost)
            }
        }        
    }
}





 console.log(fillTheTable(table, lines, backpack_size))
console.log(table);

//console.log(collumns[0.5])
//console.log(collumns);


//console.log(findMinimalCell(stuff));
