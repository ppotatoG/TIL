let obj = {'start': 1, 'end': 50};

const arr = new Array(obj.end)
.fill(obj.start)
.map((val, idx) => val += idx)
.filter((a) => a % 2 == 0);

console.log(arr);


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

console.log([...iter]);

function* gen1(){
    yield* arr;
}

console.log([...gen1()])

function* gen2(){
    for(let i = obj.start; i <= obj.end; i ++){
        i !== 0 && i % 2 === 0 ? yield i : 0;
    }
}

console.log([...gen2()])

function* gen3(startNum){
    while(startNum <= obj.end){
        yield startNum
        startNum += 2;
    }
} 

console.log([...gen3(2)])


const iterToGen = {
    *[Symbol.iterator] () {
        let num = obj.start + 2;
        while(num <= obj.end){
            yield num;
            num += 2;
        }
    }
}
console.log([...iterToGen])
