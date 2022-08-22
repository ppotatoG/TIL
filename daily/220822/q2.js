const solution = ( ingredient ) => {
    let answer = 0;
    let i = 0;

    while(ingredient[i] && ingredient.length >= 4) {
        for(let idx = 0; idx <= ingredient.length - 4; idx ++) {
            if([...ingredient].splice(idx, 4).join('') === '1231')
            {
                ingredient.splice(idx, 4);
                answer ++;
                break;
            }
        }
        
        i++;
    }

    return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
console.log(solution([
    1, 1, 1, 1,
    2, 3, 1,
    2, 3, 1,
    2, 3, 1,
    2, 3, 1,
]));

// 41.2 / 100 시간초과