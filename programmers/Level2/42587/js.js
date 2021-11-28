function solution(priorities, location) {
    const arr = priorities.slice().map((val, idx) => val = [val, idx]);
    const print = [];

    let i = 0;
    while(print.length < priorities.length){
        const greater = arr.find((val, idx) => val[0] <= arr[i][0] && idx < i);
        console.log(greater)
        
        if(greater) {
            print.push(arr[i]);
        }
        else {
            arr.push(arr[i]);
        }
        i++;
    }
    
    return print;
    return print.find((val) => val[1] === location - 1)[0]
}

// console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

/*
0 [1, 3, 2, 2]
1 [3, 2, 2, 1]
2 [2, 2, 1], [3]
3 [2, 1], [3, 2]
4 [1], [3, 2, 2]
5 [], [3, 2, 2, 1]
*/