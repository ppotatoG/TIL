function solution(n, arr1, arr2) {
    return arr1.map((val, idx) => {
        let value = Number(val.toString(2)) + Number(arr2[idx].toString(2));
        return value.toString().padStart(n, 0).replace(/1|2/g, '#').replace(/0/g, ' ');
    })
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

["######","###  #","##  ##","#### ","#####","### # "]
["######","###  #","##  ##"," #### "," #####","### # "]