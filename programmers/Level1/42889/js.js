function solution(n, stages) {
    let user = stages.length;
    let arr = new Array(n).fill(0).map((val, idx) => {
        let tmp1 = val = idx + 1;
        let tmp2 = stages.filter((val) => val == tmp1).length;

        user -= tmp2;
        tmp2 /= user;

        return [tmp1, tmp2]
    });
    
    arr.sort((a, b) => {
        if (a[1] < b[1]) return 1
        else if (a[1] > b[1]) return -1
        else return 0
    })
    
    return arr.map((val) => val[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4,4,4,4,4])); // [4,1,2,3]