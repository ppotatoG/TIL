function birthdayCakeCandles(candles) {
    const max = Math.max.apply(null, candles);
    return candles.filter(v => v === max).length;
}