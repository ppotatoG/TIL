function solution(p, c){
    p.sort();
    c.sort();

    for(let i = 0; i < p.length; i++){
        if(p[i] !== c[i]) return p[i];
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))