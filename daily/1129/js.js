let obj = {'start': 1, 'end': 50};

obj.start = obj.start % 2 ? obj.start - 1 : obj.start;

const iter = {
    val: obj.start,
    next() {
        return {
            value: this.val += 2,
            done: this.val > obj.end,
        }
    },
    [Symbol.iterator]() {
        return this
    }
}

console.log(iter)
console.log([...iter]);