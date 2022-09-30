function kangaroo(x1, v1, x2, v2) {
    let i = 1;
    while (i < 10000) {
        x1 += +v1;
        x2 += +v2;
        
        if (x1 === x2) return 'YES';
        
        i ++;
    }
    
    return 'NO';
}