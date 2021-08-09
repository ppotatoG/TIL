function solution(p, c){
    p.sort();
    c.sort();

    console.log(p, c);

    let p2 = p.filter((a, b) => {
        return p.indexOf(a) === b ;
    })

    console.log(p2, c);

    // return p2.pop(c);
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
