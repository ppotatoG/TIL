function solution(id_list, report, k) {
    report = report
    .filter((a, b) => report.indexOf(a) === b)
    .map(val => val.split(' '));

    let answer = id_list.map(val => [val, 0, 0]);

    for(let i = 0; i < report.length; i++) {
        let findIdx = id_list.findIndex(val => val === report[i][1]);
        answer[findIdx][1] += 1;
    }

    let tmp = answer.filter(val => val[1] >= k);

    console.log(tmp)

    if(tmp) {
        for(let i = 0; i < report.length; i++) {
            console.log(report[i][1], report[i][2])
        }   
    }

    return answer

    answer = answer.filter(val => val[1] >= k);
    
    return answer
}
console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)); // [2,1,1,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [0, 0]