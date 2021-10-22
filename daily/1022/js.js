function solution(arr){
    const newArr = new Array(Math.max.apply(Math, arr)).fill(0);

    arr.sort((a, b) => a - b).map((val, idx) => {
        newArr[arr[idx] - 1] += 1;
    })

    return newArr.filter((a) => a !== 1);
}

console.log(solution([3, 4, 2, 5, 3, 3, 4, 6, 1, 2, 3, 6])); // [2, 4, 2, 2]