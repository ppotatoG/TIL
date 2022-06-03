const  solution = (clothes) => {
    return Object.values(
        clothes.reduce((obj, t) => {
            obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
            return obj;
        }, {})
    )
    .reduce((a,b)=> a*(b+1), 1)-1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])); // 3