function solution(arr){
    let newArr = new Array(Math.max.apply(Math, arr)).fill(0);

    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i ++){
        newArr[arr[i] - 1] += 1;
    }

    return newArr.filter((a) => a !== 1);
}

console.log(solution([3, 4, 2, 5, 3, 3, 4, 6, 1, 2, 3, 6])); // [2, 4, 2]