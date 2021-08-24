function fnc(n) {
    const arr = [];
    
    for(let i = 0; i < n + 1 ; i++){
        arr.push(true)
    }

    for(let j = 2 ; j * j < n ; j++){
        if (arr[j]) {
            for (let k = j * j; k <= n; k += j) { 
                arr[k] = false;
            }
        }
    }

    arr.splice(0, 2, false, false);

    const answer = arr.filter((a) => {
        return a !== false;
    })

    return answer.length;
}

console.log(fnc(100));