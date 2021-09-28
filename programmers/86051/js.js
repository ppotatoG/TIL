function solution(num) {
    let newArr = [];
    for(let i = 0; i < 10; i++){
        if(i !== num.sort()[i]){
            num.push(i)
            newArr.push(i);
        }
    }
    return newArr.reduce((a, b) => a + b);
}
console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));