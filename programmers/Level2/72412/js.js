const solution = (info, query) => {
    let answer = new Array(query.length).fill(0);

    // info = info.map((val) => {
    //     return val.split(' ');
    // });

    return Array.from(
        {
            length: query.length
        }, (values, index) => {
            return query.map(data => {
                return data
                    .replace(/and/gi, '')
                    .split('  ')
                    .map((val2, idx2) => {
                        return `${val2}, ${data}`
                    })
            });
        }
    );

    query.forEach((data, idx) => {
        data = data.replace(/and /gi, '').split(' ');
        let tmp = [false, false, false, false, false];
        
        info.forEach((user) => {
            tmp = [false, false, false, false, false];
            user.forEach((item, idx3) => {
                if(data[idx3] === '-') {
                    tmp[idx3] = true;
                }
                else {
                    if(idx3 !== 4 && data[idx3] === item) {
                        tmp[idx3] = true;
                    }
                    else if(Number(data[idx3]) <= Number(item)) {
                        tmp[idx3] = true;
                    }
                }
            })
            // tmp = tmp.filter((val) => val === false);
            // if(tmp.length === 0) {
            //     answer[idx] ++;
            // }
        })
    })

    return answer;
}

console.log(
solution(
    [
        "java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"
    ],

    [
        "java and backend and junior and pizza 100",
        "python and frontend and senior and chicken 200",
        "cpp and - and senior and pizza 250",
        "- and backend and senior and - 150",
        "- and - and - and chicken 100",
        "- and - and - and - 150"
    ]
)
);