function solution(w, h) {
    const num = Math.ceil(Math.sqrt((h*h) + (w*w)));
    const sum = w * h
    
    // 정사각형
    if(w === h) {
        return sum - w;
    }
    // 둘 다 홀수
    else if (w % 2 !== 0 && h % 2 !== 0) {
        return sum - num + 1
    }
    // 둘 다 짝수
    else if (w % 2 === 0 && h % 2 === 0) {
        return sum - num - 1;
    }
    else {
        sum - num + 3
    }
}

console.log(solution(8, 12));