function solution(arr) {
    arr.map((val) => val.sort((a, b) => a - b));

    let val1 = 0;
    let val2 = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] > val1) val1 = arr[i][0];
        if(arr[i][1] > val2) val2 = arr[i][1];
    }
    
    return val1 * val2;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 60, 70, 60, 80