function solution(citations) {    
    const answer = [];

    let i = 0;
    while(i < citations.length){
        const max = citations.filter(val => val >= citations[i]);
        const min = citations.filter(val => val < citations[i]);

        max.length >= citations[i] && min.length < citations[i] 
        ? answer.push(citations[i]) 
        : 0

        i++;
    }

    return Math.max.apply(null, answer);
}

console.log(solution([3, 0, 6, 1, 5])); // 3
