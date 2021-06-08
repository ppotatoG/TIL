const obj = {};
const arr = [1, 3, 1, 3, 1, 3];
for ( const num of arr ) {
    // 6번 반복하는 반복분 (arr.length = 6)

    let one = 1
    
    if(obj[num] == undefined ){
        obj[num] = 1;
    } else {
        obj[num] += 1
    }

    console.log(obj)

}
