let arr = [1, 2, 3, 10000]

arr.sort(function(a, b){
    if(a > b) return 1
    else if(a === b) return 0
    else return -1
})

console.log(arr)