function solution(board, move) {
    let arr = [];
    let tmp = new Array(move.length).fill(0);
    let answer = 0;

    for(let i = 0; i < board.length; i++){
        arr[i] = board.map((val) => val = val[i]).filter((val) => val !== 0);
    }

    for(let i = 0; i < move.length; i++){
        const line = move[i] - 1;

        tmp[i] = arr[line][0];
        arr[line].splice(0, 1);
    }
    
    tmp = tmp.filter((val) => val !== undefined)
    
    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] === tmp[i + 1]) {
            answer += 2;
            tmp.splice(i, 2);
        }
    }

    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] === tmp[i + 1]) {
            answer += 2;
            tmp.splice(i, 2);
        }
    }

    return answer;
}
console.log(solution(
    [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], 
    [1,5,3,5,1,2,1,4]
)); // 4

// 4 3 1 1 3 2 0 4