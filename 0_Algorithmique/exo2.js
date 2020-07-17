M = 123456
L = 6

/*
M = 65535
L = 0
*/

let binaryResult = (M >>> 0).toString(2);

let biggestChain = 0;
let currentChainAnalysed = 0;

for (let i = 0; i < binaryResult.length; i++) {

    if (binaryResult[i] === '0')
        currentChainAnalysed++
    else {
        //console.log(currentChainAnalysed)
        biggestChain = currentChainAnalysed > biggestChain ? currentChainAnalysed : biggestChain
        currentChainAnalysed = 0
    }
}

biggestChain = currentChainAnalysed > biggestChain ? currentChainAnalysed : biggestChain

console.log(biggestChain)
