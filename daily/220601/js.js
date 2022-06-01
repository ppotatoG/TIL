const solution = (participant, completion) => {

    participant.sort();
    completion.sort();

    return participant.filter((val, idx) => val !== completion[idx])
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));