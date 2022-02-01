const solution = (id_list, report, k) => {
    const obj = {};
    
    id_list.map(val => obj[val] = []);
    
    report = report
    .filter((a, b) => report.indexOf(a) === b)
    .map(val => {
        val = val.split(' ');
        obj[[val[1]]].push(val[0]);
    })

    const arr = [...id_list].map(val => [val, 0])

    Object.values(obj).map(val => {
        if(val.length >= k) {
            val.map(val2 => {
                const idx = id_list.findIndex(userId => userId === val2)
                arr[idx][1] += 1;
            })
        }
    });

    return arr.map(val => val[1]);
}
console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)); // [2,1,1,0]
// console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [0, 0]