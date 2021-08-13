function solution(arr){
    let blank = '';

    for(let j = 0; j < arr.length -1; j++){
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i + 1]) {
                blank = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = blank;
            }
        }
    }

    return arr;
}

console.log(solution(['sun', 'bed', 'car', 'she', 'apple', 'banana']));
console.log(solution(['aaab', 'aaac', 'aaaw', 'aaaa']));