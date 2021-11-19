function solution(str) {
    let answer = [];
    str = str.replace(/10/g, 'A')
    
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[0-9]/) !== null) answer.push(Number(str[i]));
        if(str[i].match(/A/) !== null) answer.push(10);

        if(str[i] === 'D') answer[answer.length - 1] **= 2
        if(str[i] === 'T') answer[answer.length - 1] **= 3

        if(str[i] === '*') {
            answer[answer.length - 1] *= 2
            if(answer[answer.length - 2] !== undefined){
                answer[answer.length - 2] *= 2
            }
        }

        if(str[i] === '#') {
            answer[answer.length - 1] *= -1
        }

    }

    return answer.reduce((a, b) => a + b);
}
console.log(solution('1S2D*3T')); // 1S + 2D* + 3T
console.log(solution('1D2S#10S')); // 1D + 2S# + 10S
console.log(solution('1D2S0T')); // 1D + 2S + 0T
console.log(solution('1S*2T*3S')); // 1S* + 2T* + 3S, (1)*2 * 2 + (8)*2 + 3, 4 + 16 + 3 
// console.log(solution('1S2D3T')); // 1S + 2D + 3T , 1 + 4 + 27 , 32
// console.log(solution('10S2D*10T#')); // 10S + 2D* + 10T#, 10 * 2 + 8 + -(1000)
// console.log(solution('0S')); // 10S + 2D* + 10T#, 10 * 2 + 8 + -(1000)
// console.log(solution('10S')); // 10S + 2D* + 10T#, 10 * 2 + 8 + -(1000)
// console.log(solution('0S10S')); // 10S + 2D* + 10T#, 10 * 2 + 8 + -(1000)