const newArr = (startNum, endNum) => {
    return Array.from({length : endNum}, (val, idx) => val = startNum + idx);
}

console.log(newArr(2, 5))