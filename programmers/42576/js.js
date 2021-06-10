let participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
let completion = ["josipa", "filipa", "marina", "nikola"]

function solution(participant, completion) {
    participant.filter(x => !completion.includes(x))

    var answer = participant.filter(x => !completion.includes(x))

    // return answer
    console.log(answer)
}

solution(participant, completion)

