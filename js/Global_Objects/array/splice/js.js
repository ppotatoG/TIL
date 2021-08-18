let arr = [1, 2, 3, 4, 1, 2, 4, 1, 2, 3, 4, 2]

console.log(arr)

for(let i = 0; i < arr.length; i ++) {
    if(arr[i] == 4) {
        arr.splice(i, 1)
        i--
    }
}
console.log(arr)
