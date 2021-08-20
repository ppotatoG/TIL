function solution(num) {
    let answer = 0;

    for(let item = 2; item < num + 1; item ++){
        // console.log(Math.sqrt(item));
        
        if(!Number.isInteger(Math.sqrt(item))) {
            console.log(item);

            answer ++;
        }

        // if(count == 1) answer ++; 
    }

    return answer;
}
console.log(solution(10))