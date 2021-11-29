function solution(priorities, location) {
    const arr = priorities.slice().map((val, idx) => val = [val, idx]);
    const print = [];

    let i = 0;
    while(print.length < priorities.length && i < 100){
        const greater = arr.find((val, idx) => val[0] <= arr[i][0] && idx < i);
        greater ? print.push(arr[i]) : arr.push(arr[i]);
        
        i++;
    }

    if(print[0][0] < print[1][0]) {
        let tmp = print[0];
        print[0] = print[1];
        print.splice(1, 1)
        print.push(tmp);
    }

    let test = print.find((val) => val[1] === location);
    
    return print.indexOf(test) + 1;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
/*
0 [1, 3, 2, 2]
1 [3, 2, 2, 1]
2 [2, 2, 1], [3]
3 [2, 1], [3, 2]
4 [1], [3, 2, 2]
5 [], [3, 2, 2, 1]
*/

console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
/*
[1, 9, 1, 1, 1, 1]
[9, 1, 1, 1, 1, 1]
[1, 1, 1, 1, 1], [9]
[1, 1, 1, 1], [9, 1]
[1, 1, 1], [9, 1, 1]
[1, 1], [9, 1, 1, 1]
[1], [9, 1, 1, 1, 1]
[], [9, 1, 1, 1, 1, 1]
*/