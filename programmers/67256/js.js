function solution(num, hand) {
    let now = [0, 0]

    for(let i = 0; i < num.length; i++) {
        let line = num[i] % 3;

        if(line == 1) {
            now[0] = num[i];
            num[i] = 'L'
        }
        else if(line == 0) {
            now[1] = num[i];
            num[i] = 'R'
        }
        else {
            console.log(Math.abs(num[i] - now[0]), Math.abs(num[i] - now[1]));
            console.log(num[i], now);

            if(Math.abs(now[0] - num[i]) < Math.abs(now[1] - num[i])) {
                now[0] = num[i];
                num[i] = 'L'
            }
            else if(Math.abs(now[0] - num[i]) > Math.abs(now[1] - num[i])) {
                now[1] = num[i];
                num[i] = 'R'
            }
            else {
                if(hand.slice(0, 1).toUpperCase() === 'L') {
                    now[0] = num[i];
                } else {
                    now[1] = num[i];
                }
                num[i] = hand.slice(0, 1).toUpperCase();
            }
        }
    }
    return num.join('');
}
console.log(solution(
    [1, 3, 4, 5, 
    8, 2, 1, 4, 
    5, 9, 5],
//  [1, 0, 1, 2, 2, 2, 1, 1, 2, 0, 2]
    "right"
)); 

// "LRLLLRLLRRL"