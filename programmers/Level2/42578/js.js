const  solution = (clothes) => {
    let obj = {};

    clothes.forEach((value) => {
        obj[value[1]] += `${value[0]}-`;
    })

    for(let item in obj){
        obj[item] = obj[item].replace(/undefined/gi, '').split('-');
    }

    // return obj

    let answer;

    if(Object.keys(obj).length === 1) {
        answer = Object.keys(obj)[0].length - 1;
    }
    else {
    }

    return answer;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5
// console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])); // 3