function fnc(){
    let arr = [2, 3, 5, 7];

    for(let i = 2; i < 120; i++){
        if((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(fnc());