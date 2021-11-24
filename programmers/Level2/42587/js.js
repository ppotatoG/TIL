function solution(priorities, location) {
    const arr = priorities.map((val, idx) => val = [val, idx]);

    const print = [];
    
    let i = 0;

    // while(print.length < priorities.length && i < priorities.length){
    //     console.log(`${i} 번째 중복`)
    //     console.log(arr[i], arr)
    //     if(arr.find((val, idx) => val[0] >= arr[i][0] && idx > i)) {
    //         arr.push(arr[i])
    //         arr.shift();
    //         console.log(arr[i], arr)
    //     }
    //     else {
    //         console.log(arr[i], arr)
    //         print.push(arr[i])
    //     }
    //     i++;
    // }

    for(let i = 0; i < priorities.length; i++){
        // console.log(`${i} 번째 중복`)
        // console.log(arr[i], arr)
        console.log(`${arr[i]} ${arr}`)
        console.log(arr.find((val, idx) => val[0] >= arr[i][0] && idx > i) !== undefined)
        if(arr.find((val, idx) => val[0] >= arr[i][0] && idx > i) !== undefined) {
            console.log(arr[i], arr)
            arr.push(arr[i])
            console.log(arr[i], arr)
            // arr.shift();
        }
        // else {
        //     console.log(arr[i], arr)
        //     print.push(arr[i])
        //     arr.shift();
        //     i--;
        // }
    }

    console.log(print)
    return arr
}
console.log(solution([2, 1, 3, 2], 2));

/*
0 [1, 3, 2, 2]
1 [3, 2, 2], [1]
2 [2, 2, 3], [1]
3 [2, 3, 2], [1]
4 [3, 2], [1, 2]
5 [2, 3], [1, 2]
6 [3], [1, 2, 2]
7 [], [1, 2, 2, 3]
*/