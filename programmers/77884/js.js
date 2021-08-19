function solution(min, max) {
    let arr = [];
    let minus = [];

    for(let i = min; i < max + 1; i++ ){
        arr.push(i);
    }

    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(Math.sqrt(arr[i]))) {
            minus.push(arr[i])
            arr.splice(i, 1)
            i --;
        }
    }

    return (arr.reduce((a, b) => a + b)) - minus.reduce((a, b) => a + b);
}
console.log(solution(13, 17))