const promise = new Promise((resolve, reject) => {
    console.log('doing something');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
})

promise
.then((val) => {
    console.log(val);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000)
})

fetchNumber
.then((num) => num * 2)
.then((num) => num + 3)
.then((num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then((num) => console.log(num))

