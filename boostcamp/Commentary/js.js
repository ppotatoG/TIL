let list01 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
// let list02 = [3, 2, 4, 4, 2, 5, 2, 5, 5, 6, 6, 6, 7, 7, 7, 8,8,8]
// let list03 = [3, 5, 7, 9]

function countOf(arr, value){
    var count = 0;
    arr.forEach(element => {
        if(element == value) count++;        
    });
    return count;
}
function solution(arr){
    var answer = [];
    var set = new Set([]);

    arr.forEach(element => {
        if(set.has(element)) return;
        set.add(element);
        count = countOf(arr , element);
        if(count > 1) answer.push(count);
    });
    if(answer.length == 0) answer.push(-1);

    // return answer;
    console.log(answer)
}

solution(list01) 
// solution(list02)
// solution(list03)