function sort(list){
    const arr = list.map((val, idx) => val = [val, idx])
    let tmp = '';

    for(let i = 0; i < arr.length - 1; i++){
        for(let k = 0; k < arr.length - 1; k++){
            if(arr[k][0] > arr[k + 1][0]) {
                tmp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = tmp;
            }
        }   
    }

    return arr;
};

console.log(sort([2, 4, 6, 1, 2, 2, 5, 7]));