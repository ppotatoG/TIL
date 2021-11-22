const obj = {
    name : '홍길동',
    age : 21
};


// 객체의 값을 배열로 반환
console.log(Object.entries(obj))
/*
0 ['name', '홍길동']
1 ['age', 21]
*/

// 객체의 key 가져오기
console.log(Object.keys(obj)); 
// ['name', 'age']

// 객체의 value 가져오기
console.log(Object.values(obj)); 
// ['홍길동', 21]

// 객체 탐색
for(let val in obj) { 
    console.log(`key : ${val}, value : ${obj[val]}`); 
}
/*
key : name, value : 홍길동
key : age, value : 21
*/

// 객체 내 key 탐색
for(i of Object.keys(obj)) {
    console.log(i);
}
/*
name
age
*/

// 객체 내 value 탐색
for(i of Object.values(obj)) {
    console.log(i);
}
/*
홍길동
21
*/