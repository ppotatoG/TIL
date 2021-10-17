function solution(arr) {
    const obj = {
        std1 : [1, 2, 3, 4, 5],
        std2 : [2, 1, 2, 3, 2, 4, 2, 5],
        std3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }

    const values = Object.values(obj);

    for(let i = 0; i < values.length; i++){
        const num1 = Math.ceil((arr.length - values[i].length) / values[i].length);

        if(values[i].length < arr.length) {
            for(let j = 0; j < num1; j++){
                values[i].push(Object.values(obj)[i]);;
            }
        }
    }

    for(let i = 0; i < values.length; i++){
        values[i] = values[i].flat();
        for(let k = 0; k < values[i].length; k++){
            if(typeof(values[i][k]) === 'object'){
                values[i].splice(k, 1);
                k--;     
            }
        }
    }

    let count = [0, 0, 0];

    for(let i = 0; i < values.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(values[i][k] === arr[k]){
                count[i] ++;
            }
        }
    }

    return count;

}
console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));