function solution(n, lost, reserve) {      
    lost = lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    });

    console.log(lost)
    console.log(reserve);

    // return lost.map((val) => {
    //     if(Number(val) === val) return true;
    // })
}
console.log(solution(10, [5, 7, 9], [1, 2, 3, 4, 6, 8])); // 10
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10])); // 6
console.log(solution(3, [3], [1])); // 2