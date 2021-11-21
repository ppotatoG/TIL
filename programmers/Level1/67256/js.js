function solution(num, hand) {
    let finger = [10, 12]
    let answer = [...num]
    
    
    for(let i = 0; i < num.length; i++) { 
        let row = num[i] === 0 ? 2 : num[i] % 3;
        
        if(row == 1) {
            finger[0] = num[i];
            answer[i] = 'L'
        }
        else if(row == 0) {
            finger[1] = num[i];
            answer[i] = 'R'
        }
        
        else {
            const idx = (num) => num === 0 ? [4, 2] : [Math.ceil(num / 3), num % 3 === 0 ? 3 : num % 3];

            const left = Math.abs(idx(finger[0])[0] - idx(num[i])[0]) + Math.abs(idx(finger[0])[1] - idx(num[i])[1]);
            const right = Math.abs(idx(finger[1])[0] - idx(num[i])[0]) + Math.abs(idx(finger[1])[1] - idx(num[i])[1]);
            
            if(left < right) {
                finger[0] = num[i];
                answer[i] = 'L'
            }
            else if(left > right) {
                finger[1] = num[i];
                answer[i] = 'R'
            }
            else {
                if(hand.slice(0, 1).toUpperCase() === 'L') {
                    finger[0] = num[i];
                } else {
                    finger[1] = num[i];
                }
                answer[i] = hand.slice(0, 1).toUpperCase();
            }
        }
    }
    
    return answer.join('');
}

// console.log(solution(
//     [1, 3, 4, 5, 
//     8, 2, 1, 4, 
//     5, 9, 5],
//     "right"
// )); 

// "LRLLLRLLRRL"
// "LRLLLRLLRRL"

// console.log(solution(
//     [7, 0, 8, 2, 
//         8, 3, 1, 
//         5, 7, 6, 2],
//     "left"
// )); 

// "LRLLRRLLLRR"
// "LRLLRRLLLRR"

console.log(solution(
    [1, 2, 3, 
    4, 5, 6, 
    7, 8, 9, 
       0],
    "right"
)); 
// "LLR LLR LLR L"
// "LLR LLR LLR L"