function solution(num) {
    let answer = 0;

    for(let item = 0; item < num + 1; item ++){
        
        let count = 0;

        for(let i = 2; i < item + 1; i ++){
            if(item % i == 0 ) count ++;
        }

        if(count == 1) answer ++; 
    }
    return answer;
}
console.log(solution(5))