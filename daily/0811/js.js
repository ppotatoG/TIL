// function solution(p, c){
//     p.sort();
//     c.sort();

//     for(let i = 0; i < p.length; i++){
//         if(p[i] !== c[i]) return p[i];
//     }
// }
// console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))

function solution(a, c){    
    let answer = [];

    for(let n = 0; n < c.length; n++){
        answer.push(a.slice(c[n][0] - 1, c[n][1]).sort((a, b) => a - b)[c[n][2] -1])
    }
    return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));