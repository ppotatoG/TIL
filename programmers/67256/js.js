function solution(num, hand) {
    let finger = [0, 0]
    let answer = [...num]

    for(let i = 0; i < num.length; i++) {
        let row = num[i] % 3;
        let column = num[i] / 3;

        if(row == 1) {
            finger[0] = num[i];
            answer[i] = 'L'
        }
        else if(row == 0) {
            finger[1] = num[i];
            answer[i] = 'R'
        }
        
        else {
            console.log(`num ${num[i]}, finger ${finger}`);
            console.log('정수값 ' + Math.abs(num[i] - finger[0]), Math.abs(num[i] - finger[1]));

            if(Math.abs(finger[0] - num[i]) < Math.abs(finger[1] - num[i])) {
                finger[0] = num[i];
                num[i] = 'L'
                console.log('L')
            }
            else if(Math.abs(finger[0] - num[i]) > Math.abs(finger[1] - num[i])) {
                finger[1] = num[i];
                num[i] = 'R'
                console.log('R')
            }
            else {
                if(hand.slice(0, 1).toUpperCase() === 'L') {
                    finger[0] = num[i];
                } else {
                    finger[1] = num[i];
                }
                num[i] = hand.slice(0, 1).toUpperCase();
            }
        }
    }
    
    return answer.join('');
}
console.log(solution(
    [1, 3, 4, 5, 
    8, 2, 1, 4, 
    5, 9, 5],
//  [1, 0, 1, 2, 2, 2, 1, 1, 2, 0, 2]
    "right"
)); 

// "LRL LLR LL R R L"
// "LRL 582 LL 5 R 5"