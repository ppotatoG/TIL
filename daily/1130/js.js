function solution(x, n) {
    return new Array(n).fill(x).map((val, idx) => val *= idx + 1);
}

console.log(solution(2, 5))

function fnc1(x, n){
    const iter = {
        val: 0,
        next() {
            return {
                value: this.val += x,
                done: Math.abs(this.val) > Math.abs(x * n),
            }
        },
        [Symbol.iterator]() {
            return this
        }
    }
    
    return([...iter]);
}
console.log(fnc1(2, 5))

function fnc2(x, n) { 
    function* gen(x, n){
       let i = 1;
       while(i < n + 1){
           yield x * i
           i++;
       }
   }
   
   return [...gen(x, n)]
}

console.log(fnc2(2, 5))