function solution(arr) {
    let obj = {
        std1 : [1, 2, 3, 4, 5],
        std2 : [2, 1, 2, 3, 2, 4, 2, 5],
        std3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    const num1 = (arr.length - obj.std1.length) / obj.std1.length
    const num2 = (arr.length - obj.std1.length) % obj.std1.length

    if(obj.std1.length < arr.length) {
        for(let i = 0; i < Math.floor(num1); i++){
            obj.std1.push(1, 2, 3, 4, 5)
        }
        for(let i = 0; i < num2; i++){
            obj.std1.push(obj.std1[i])
        }
    }

    console.log(`arr.length ${arr.length}`)
    return obj.std1
}
console.log(solution([1,2,3,4,5,1,2,3]));
console.log(solution([1,2,3,4,5,1,2,3,4,5,2,3,1,2,3,4,5,1,2,3,4,5,2,3]));