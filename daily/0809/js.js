function solution(p, c){
    p.sort();
    c.sort();

    let answer = p.filter((a, b) => {
        return p.indexOf(a) !== b;
    })

    // return answer;
    // console.log(answer);

    if(answer.length === 0) {
        return p.push(answer);
    }else return p.pop(c);
}
//else console.log(answer);

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))

// let p1 = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let c1 = ["josipa", "filipa", "marina", "nikola"];

// let p2 = ["mislav", "stanko", "mislav", "ana"];
// let c2 = ["stanko", "ana", "mislav"];

// solution(p1, c1);
// solution(p2, c2);