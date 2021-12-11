function solution(s) {    
    const answer = [0, 0]

    while(s != 1){
        answer[1] += s.match(/0/g).length;
        s = (s.replace(/0/g, '').length).toString(2);
        answer[0]++;
    }

    return answer;
}
console.log(solution('110010101001'));