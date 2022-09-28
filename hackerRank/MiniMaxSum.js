function miniMaxSum(arr) {
    arr = arr.sort((a, b) => a - b);
    const max = arr.slice(1).reduce((a, c) => a+= c);
    const min = arr.slice(0, -1).reduce((a, c) => a+= c);
    
    console.log(`${min} ${max}`);
}