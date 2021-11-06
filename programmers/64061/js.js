function solution(board, move) {
    let tmp = new Array(move.length).fill(0);

    for(let i = 0; i < board.length; i++){
        arr[i] = board.map((val) => val = val[i])
    }
    console.log(board)

    for(let i = 0; i < move.length; i++){
        const line = move[i] + 1;

        for(let k = 0; k < board.length; k ++){
            board[k]
        }
    }
}
console.log(solution(
    [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], 
    [1,5,3,5,1,2,1,4]
)); // 4

// 4 3 1 1 3 2 0 4