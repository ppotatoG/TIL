const solution = n => {
    const num = n.toString(2).match(/1/g).length;

    while(true) {
        n++;
        if(n.toString(2).match(/1/g).length === num) return n;
    }
}
console.log(solution(78)); // 83
console.log(solution(15)); // 23