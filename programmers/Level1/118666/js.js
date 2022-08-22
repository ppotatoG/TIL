const solution = (survey, choices) => {
    const obj = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    choices.forEach(((score, idx) => {
        const [A, B] = survey[idx].split('');
        
        if(score <= 3) {
            obj[A] += (4 - score)
        }
        else if(score >= 5) {
            obj[B] += (score - 4)
        }
    }))

    let answer = '';
    
    answer += obj['R'] >= obj['T'] ? 'R' : 'T';
    answer += obj['C'] >= obj['F'] ? 'C' : 'F';
    answer += obj['J'] >= obj['M'] ? 'J' : 'M';
    answer += obj['A'] >= obj['N'] ? 'A' : 'N';

    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])) // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])) // "RCJA"