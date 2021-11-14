function solution(num) {
    let arr = [];

    for(let i = 0; i < num.length; i++){
        for(let k = i + 1; k < num.length; k++){
            for(let j = k + 1; j < num.length; j++){
                arr.push(num[i] + num[k] + num[j])
            }
        }
    }

    let answer = new Array(arr.length).fill(0);

    for(let i = 0; i < answer.length; i++){
        for(let k = 1; k <= arr[i]; k++){
            if(arr[i] % k === 0) answer[i] ++; 
        }
    }

    return answer.filter((val) => val === 2).length;
}
console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))