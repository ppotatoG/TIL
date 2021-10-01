function solution(num){
    const nArr = new Array(num).fill(false)
    nArr[0] = true;
    for(let i = 2; i * i <= num; i++){
        for(let k = i * i; k <= num; k += i){
            nArr[k - 1] = true;
        }
    }
    
    return nArr.filter((cur) => cur === false).length;
}
console.log(solution(10));