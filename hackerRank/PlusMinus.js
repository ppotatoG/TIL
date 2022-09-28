function plusMinus(arr) {
    const length = arr.length;
    
    let plus = 0;
    let minus = 0;
    let zero = 0;

    arr.forEach(num => {
        if (num > 0) plus++;
        else if (num < 0) minus++;
        else if(num === 0) zero++;
    })

    console.log((plus / length).toFixed(6));
    console.log((minus / length).toFixed(6));
    console.log((zero / length).toFixed(6));
}
