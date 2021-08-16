function solution(arr){
    // return arr.reduce((a, b) => a + b);

    let answer = 0;

    for(let i = 0; i < arr.length; i++){
        answer = answer + arr[i];
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));