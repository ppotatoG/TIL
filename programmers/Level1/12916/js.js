function solution(s) {
    let arr = s.toUpperCase().split("");

    let reducer = (acc, cur) => {
        if (!acc[cur]) acc[cur] = 1;
        else acc[cur] = acc[cur] + 1;

        return acc; 
    };

    let obj = arr.reduce(reducer, {});

    console.dir(obj.P);
    console.dir(obj.Y);

    if(obj.P === obj.y) console.log(obj.P, obj.Y);
    else console.log(false)
}

let s1 = "pPoooyY"
let s2 = 'qwer'

solution(s1)