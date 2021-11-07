function solution12943(n) {
    let count = 0;

    while(n !== 1 && count < 500){
        n % 2 == 0 ? n = n / 2 : n = n * 3 + 1 ; 
        count ++;
    }

    return n === 1 ? count : -1;
}

console.log(solution12943(6)) // 8
console.log(solution12943(16)) // 4

/*-----------------*/ 

function solution12944(n) {
    return num.reduce((a, b) => a + b) / num.length;
}

/*-----------------*/ 

function solution12947(n) {
    const sum = (n+'').split('').reduce((a, b) => Number(a) + Number(b));
    return n % sum === 0;
}

console.log(solution12947(10)) // true
console.log(solution12947(12)) // true
console.log(solution12947(11)) // false
console.log(solution12947(13)) // false

/*-----------------*/ 

function solution12948(phone) {
    return ('*').repeat(phone.length - 4) + phone.slice(-4);
}

console.log(solution12948('01033334444')) //
console.log(solution12948('027778888')) // 

/*-----------------*/ 

function solution12950(arr1, arr2) {
    let arr = [...arr1];

    for(let i = 0; i < arr1.length; i++){
        for(let k = 0; k < arr1[i].length; k++) {
            arr[i][k] = arr1[i][k] + arr2[i][k];
        }   
    }

    return arr;
}

console.log(solution12950([[1,2],[2,3]], [[3,4],[5,6]])) // [[4,6],[7,9]]
console.log(solution12950([[1],[2]], [[3],[4]])) // [[4],[6]]
