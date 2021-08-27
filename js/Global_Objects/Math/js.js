const arr = [];

for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random()*100))
}

const max = arr.reduce((a, b) => {
    return Math.max(a, b)
})
const min = arr.reduce((a, b) => {
    return Math.min(a, b)
})

console.log(arr);
console.log(max);
console.log(min);