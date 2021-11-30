function solution(priorities, location) {
    const arr = priorities.slice().map((val, idx) => val = [val, idx]);
    const print = [];

    while(priorities.length){
        const greater = arr.find((val, idx) => val[0] <= arr[0][0] && idx < 0);
        if(greater) {
            arr.push(arr.shift());
        } else {
            print.push(arr[0]);
            priorities.shift();
        }
    }

    console.log(arr)
    
    return print;
}

// function solution(priorities, location) {
//     var answer = 0; 

//     let print = Array.from({length: priorities.length}, (v,i) => i);
//     let find = [priorities[location] ,location];

//     console.log(print)
//     console.log(find)
//     // return print;
// }

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