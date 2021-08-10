function solution(p, c){
    p.sort();
    c.sort();

    let reducer = (a, c) => {
        if(!a[c]) a[c] = 1;
        else a[c] = a[c] + 1;
        return a;
    }

    let pReduce = p.reduce(reducer, {});

    console.log(pReduce);

    for( i of p){
        console.log(p, i);
    }

    for( i in p){
        console.log(p, i);
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))