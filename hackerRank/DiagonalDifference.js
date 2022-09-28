function diagonalDifference(arr) {
    let a = 0;
    let b = 0;
    const length = arr.length;
    
    for(let i = 0; i < length; i++) {
        
        a += arr[i][i];
        b += arr[i][length - i - 1];  
    };

    return Math.abs(a - b);
}