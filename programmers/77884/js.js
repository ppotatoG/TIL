function solution(min, max) {
    let arr = [];

    for(let i = min; i < max + 1; i++ ){
        arr.push(i);
    }

    let obj = {};

    arr.forEach((item) => {
        for(let n = 1; n < item + 1; n++){
            if(item % n == 0) {
                // obj = { 13 : [여기에 추가] }
                obj[item] = [];
                obj[item].push(n);

                console.log(n);
            }
        }
    })

    return obj;

    // return (plus.reduce((a, b) => a + b)) - minus.reduce((a, b) => a + b)
}
console.log(solution(13, 17))