const array = ['apple', 'banana', 'lemon', 'melon', 'peach'];


const includes = (srt) => {
    return array.includes(srt);
}

console.log(includes('apple')); // true
console.log(includes('cherry')); // false 


const indexOf = (srt) => {
    return array.indexOf(srt);
}

console.log(indexOf('melon')); // 3 


const filter = (arr, str) => {
    return arr.filter(val => val === str)
}

console.log(filter(array, 'banana')); // ['banana']

const find = (arr, str) => {
    return arr.find(val => val === str)
}

console.log(find(array, 'banana')); // 'banana' 


const findIndex = (arr, str) => {
    return arr.findIndex(val => val === str)
}

console.log(findIndex(array, 'banana')); // 1


const some = (arr, str) => {
    return arr.some(val => val === str)
}

console.log(some(array, 'lemon')); // true
console.log(some(array, 'plum')); // false
