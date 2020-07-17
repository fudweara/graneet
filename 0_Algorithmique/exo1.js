T = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
M = 626.5
//P = 6


/*
T = [500, 200, 100, 50, 20, 10, 5]
M = 626.5
//P = -1
*/

let reste = M;
let P = 0;

for (let i = 0; i < T.length; i++) {

    P += Math.floor(reste / T[i]);
    reste = reste % T[i];

    // console.log(reste);

}


console.log(reste === 0 ? P : -1)

