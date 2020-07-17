
E = [[1, 2, 3],
    [4, 5, 6],
    [7, 0, 9],
]
// M = 25


/*
E = [[0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]]
// M = 3
*/

let currentPosition = {x: 0, y: 0}
let cache = new Map()

const H = E.length;
const L = E[0].length;

let getSeedEat = function (currentPosition) {

    // On vient de sortir du tableau défini
    if (currentPosition.x === H || currentPosition.y === L)
        return 0;

    // On est à l'arrivé
    if (currentPosition.x === H - 1 && currentPosition.y === L - 1)
        return E[H - 1][L - 1];


/*
    // On va voir dans le cache si la meilleure trajectoire n'a depuis la position actuelle n'a pas déjà été calculé
    if(cache.has(currentPosition.x+'/'+currentPosition.y)){
        console.log(cache)
        return cache.get(currentPosition)
    }
*/


    // On test les deux chemins
    let resultMoveDown = getSeedEat({x: currentPosition.x + 1, y: currentPosition.y})
    let resultMoveRight = getSeedEat({x: currentPosition.x, y: currentPosition.y + 1})

    let fastestWay = resultMoveDown > resultMoveRight ? resultMoveDown : resultMoveRight


     // cache.set(currentPosition.x+'/'+currentPosition.y, fastestWay + E[currentPosition.x][currentPosition.y])

    // number of seeds
    return fastestWay + E[currentPosition.x][currentPosition.y];

}


console.log(getSeedEat(currentPosition))

// Cache bugged at line  50
