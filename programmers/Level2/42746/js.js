function solution(num) {    
    num.sort((a, b) => {
        let num1 = String(a);
        let num2 = String(b);

        if(num1.length > num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.length < num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.slice(0, 1) > num2.slice(0, 1)) return 1;
        if(num1.slice(0, 1) < num2.slice(0, 1)) return -1;

        if(num1.slice(1, 2) > num2.slice(1, 2)) return 1;
        if(num1.slice(1, 2) < num2.slice(1, 2)) return -1;

        if(num1.slice(2,3) > num2.slice(2,3)) return 1;
        if(num1.slice(2,3) < num2.slice(2,3)) return -1;

        return 0;
    }).reverse();

    return num[0] === 0 ? String(0) : num.join(' ');
}
console.log(solution([0, 0, 1000]));
console.log(solution([6, 10, 2]));
console.log(solution([9,997,99,878,87]));

// console.log(solution([3, 30, 34, 5, 9]));

// 9 99 997 878 87