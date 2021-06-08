const obj = {};
const arr = [2, 5, 4, 6, 5, 8, 8, 9, 0, 9, 0, 3, 0, 6, 7, 3, 6, 8, 0, 6, 8, 9, 2, 5, 7, 9, 5];
for ( const num of arr ) {
    // 6번 반복하는 반복분 (arr.length = 6)
    
    if(obj[num] == undefined ){
        obj[num] = 1;
    } else {
        obj[num] += 1
    }
}
for(let i = 0; i < 10; i ++){
    if (obj[i] == undefined) obj[i] = -1
}
console.log(obj)
