function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(v => v + a >= s && v + a <= t).length);
    console.log(oranges.filter(v => v + b >= s && v + b <= t).length);
}