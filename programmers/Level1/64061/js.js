function solution(board, move) {
    let answer = 0;
    let basket = [];

    for(let i = 0; i < move.length; i++){
        let line = move[i] - 1;
        for(let k = 0; k < board.length; k++){
            if(board[k][move[i] - 1] !== 0){
                if(basket[basket.length - 1] === board[k][line]){
                    answer += 2;
                    basket.pop();
                }
                else basket.push(board[k][line]);
                
                board[k][line] = 0;

                break;
            }
        }
    }
    
    return answer;
}
console.log(solution(
    [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], 
    [1,5,3,5,1,2,1,4]
)); // 4

// 4 3 1 1 3 2 0 4

