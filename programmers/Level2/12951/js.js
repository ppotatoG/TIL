function solution(s) {
    let arr = s.split(' ');
    
    return arr.map((val) => {
        return Number(val.charAt(0)) !== NaN 
            ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
            : val.toLowerCase();
    }).join(' ');
}