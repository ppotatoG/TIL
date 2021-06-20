let list01 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
let list02 = [3, 2, 4, 4, 2, 5, 2, 5, 5, 6, 6, 6, 7, 7, 7, 8,8,8]
let list03 = [3, 5, 7, 9]

function solution(l){
    const arr = []; 
    let answer = [];

    for(let i = 0; i < l.length; i++){ 
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i]);
            answer.push(0);
        }
    }

    arr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );

    for(num in l) {
        const idx = arr.indexOf(l[num]);
        answer[idx] += 1;
    }

    answer = answer.filter((a) => a !== 1);

    if(answer.length == 0) answer = -1

    console.log(answer);
}

solution(list01) 
solution(list02)
solution(list03)