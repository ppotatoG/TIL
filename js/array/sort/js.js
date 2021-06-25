let arr = [1, 2, 3, 10000]

arr.sort(function(a, b){
    if(a > b) return 1
    else if(a === b) return 0
    else return -1
})

console.log(arr)

const list = [2, 4, 6, 1, 3, 8, 3, 6]

list.sort((a, b) => a - b) // [1, 2, 3, 3, 4, 6, 6, 8] 오름차순
list.sort((a, b) => b - a) // [8, 6, 6, 4, 3, 3, 2, 1] 내림차순