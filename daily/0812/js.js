// function solution(a){
//     let arr = [];

//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < a.length; j++){
//             if(i !== j) arr.push(a[i] + a[j])
//         }
//     }

//     const answer = arr.filter((a, b) => {
//         return arr.indexOf(a) === b;
//     });

//     return answer.sort((a, b) => a - b);
// }

// console.log(solution([2,1,3,4,1]));
// console.log(solution([5,0,2,7]));

function solution(a, b){

    let arr = [];

    for (let i = 0; i < a.length; i++) {
        arr.push(a[i] * b[i]);
    }

    return arr.sort((a, b) => a - b).reduce((a, b) => a + b);
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));