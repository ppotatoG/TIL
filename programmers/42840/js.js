function solution(answer) {
    const obj = {
        std1 : [1, 2, 3, 4, 5],
        std2 : [2, 1, 2, 3, 2, 4, 2, 5],
        std3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    let count = [0, 0, 0];

    for(var i = 0; i < answer.length; i++){
        if(answer[i] === obj.std1[i % 5]) count[0]++;
        if(answer[i] === obj.std2[i % 8]) count[1]++;
        if(answer[i] === obj.std3[i % 10]) count[2]++;
    }

    count = count.map((val, idx) => {
        return [idx + 1, val];
    }).sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        else return 0;
    });

    if(count[0][1] === count[1][1]){
        if(count[1][1] === count[2][1]) return [count[0][0], count[1][0], count[2][0]];
        else return [count[0][0], count[1][0]];
    }else return [count[0][0]];
}

console.log(solution([3,3,1])); // [3]
console.log(solution([])); // [1, 2, 3]
console.log(solution([2,2])); // [1, 2]
console.log(solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5])); // [1]
console.log(solution([1,3,2,4,2])); // [1, 2, 3]