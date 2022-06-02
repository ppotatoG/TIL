const  solution = (clothes) => {
    let obj = {};

    clothes.forEach((value) => {
        obj[value[1]] += `${value[0]}-`;
    })

    for(let item in obj){
        obj[item] = obj[item].replace(/undefined/gi, '').split('-');
    }

    return Object.values(obj).reduce((acc, cur, idx) => acc *= cur.length, 1) - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])); // 3