function solution(n, arr1, arr2) {

    let array = [...arr1];

    for(let i = 0; i < arr1.length; i++){
        let binary1 = arr1[i].toString(2);
        let binary2 = arr2[i].toString(2);

        array[i] = (Number(binary1) + Number(binary2) + '');

        if(array[i].length !== n){
            array[i] = ('0').repeat(n - array[i].length) + array[i];
        }
    }

    return array
    .map((val) => (val + '')
    .split('')
    .map((val2) => {
            return val2 === '0' ? val2 = ' ' : val2 = '#';
        }
    ).join(''));
}
// console.log(solution(
//     5,
//     [9, 20, 28, 18, 11],
//     [30, 1, 21, 17, 28]
// )); 

// ["#####","# # #", "### #", "# ##", "#####"]

console.log(solution(
    6, 
    [46, 33, 33, 22, 31, 50], 
    [27, 56, 19, 14, 14, 10]
)); 

// ["######", "###  #", "##  ##", " #### ", " #####", "### # "]