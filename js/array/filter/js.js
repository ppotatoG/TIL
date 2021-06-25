let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a = a.filter((b) => b%2 == 0)
b = b.filter((a) => a !== 1)

const answer = [2, 3, 3, 4, 4, 5, 5, 5, 6, 7]

const test = answer.filter((a, b) => {
    return answer.indexOf(a) === b;
});

console.log(test)