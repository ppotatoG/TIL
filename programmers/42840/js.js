function solution(arr) {
    let obj = {
        std1 : [1, 2, 3, 4, 5],
        std2 : [2, 1, 2, 3, 2, 4, 2, 5],
        std3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    let values = Object.values([...obj]);

    console.log(values)

    for(let i = 0; i < values.length; i++){
        console.log(values[i])

        const num1 = Math.ceil((arr.length - values[i].length) / values[i].length)

        if(values[i].length < arr.length) {
            for(let j = 0; j < num1; j++){
                // values[i].push(values[i]);
                console.log(values)
            }
        }
    }

    return values;

}
// console.log(solution([1,2,3,4,5]));
console.log(solution([1,2,3,4,5,1,2,3,4,5,2,3,1,2,3,4,5,1,2,3,4,5,2,3]));