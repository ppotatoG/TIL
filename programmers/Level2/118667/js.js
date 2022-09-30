const solution = (queue1, queue2) => {
    const array = [...queue1, ...queue2];
    const maxCount = array.length * 2;
    
    let totalNum = queue1.reduce((a, c) => a += c, 0);
    const goalNum = array.reduce((a, c) => a += c, 0) / 2;

    let start = 0;
    let end = queue1.length;

    let count = 0;

    while(count <= maxCount){
        if(totalNum < goalNum){
            totalNum += array[end];
            end++;
        }else if(totalNum > goalNum){
            totalNum -= array[start];
            start++;
        }else if(totalNum === goalNum){
            return count; 
        }
        count++;
    }
    
    return -1;
}
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
// console.log(solution("-1 -2 -3 -4"));
// console.log(solution("-1 -1"));

// 5 16 8
// 4 8 20