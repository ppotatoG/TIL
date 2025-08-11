const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const nums = Array.from({length: Number(input)}, (_, i) => (i * 2) + 1);
const last = nums[nums.length - 1]
const BLANK = ' ';
const STAR = '*';

for(const num of nums) {
    const blankLength = (last - num) / 2;
    console.log(`${BLANK.repeat(blankLength)}${STAR.repeat(num)}`)
}

for(const num of nums.reverse().slice(1)) {
    const blankLength = (last - num) / 2;
    console.log(`${BLANK.repeat(blankLength)}${STAR.repeat(num)}`)
}