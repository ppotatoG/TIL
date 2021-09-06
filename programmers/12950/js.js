function solution(arr1, arr2) {
    // let answer = [[], []];
    // for(let i = 0; i < arr1.length; i++){
    //     if(arr1[0].length > 1){
    //         for(let j = 0; j < arr1[i].length; j++){
    //             answer[i].push(arr1[i][j] + arr2[i][j]);
    //         }
    //     }else {
    //         answer[i].push(arr1[i] + arr2[i]);
    //     }
    // }
    console.log(arr1.map((cur, index,  arr) => { 
        return cur + '+' + index + '번째' + '+' + arr}
    ));

    return [...arr1].map((cur, idx) => {
        if(arr1[0].length === 1) return [Number(arr1[idx]) + Number(arr2[idx])];
        else return [...arr2].map((cur2, idx2) => {
            return arr1[idx][idx2] + arr2[idx][idx2];
        }, 0);
    }, 0);
}
console.log(solution([ [1,2],[2,3] ], [ [3,4],[5,6] ] ));
console.log(solution([ [1],[2] ], [ [3],[4] ] ));