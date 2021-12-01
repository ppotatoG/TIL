function solution(priorities, location) {
    const arr = Array.from({length : priorities.length}, (val, idx) => val = [priorities[idx], idx]);
    let answer = 0;

    while(priorities.length){
        const max = Math.max.apply(null, priorities);
        
        if(priorities[0] >= max) {
            answer++;
            if(arr[0][1] === location) return answer;
            priorities.shift();
            arr.shift();
        } 
        else {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }
    }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
/*
0 [2, 1, 3, 2]
1 [1, 3, 2, 2]
2 [3, 2, 2, 1]
3 [2, 2, 1], [3]
4 [2, 1], [3, 2]
5 [1], [3, 2, 2]
6 [], [3, 2, 2, 1]
*/

/*
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
[1, 9, 1, 1, 1, 1]
[9, 1, 1, 1, 1, 1]
[1, 1, 1, 1, 1], [9]
[1, 1, 1, 1], [9, 1]
[1, 1, 1], [9, 1, 1]
[1, 1], [9, 1, 1, 1]
[1], [9, 1, 1, 1, 1]
[], [9, 1, 1, 1, 1, 1]
*/