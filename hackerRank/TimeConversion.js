function timeConversion(s) {
    const isPm = s.slice(-2) === 'PM';
    let [hh, mm, ss] = s.slice(0, -2).split(':', 3);
    
    if( isPm && hh != 12 ) hh = Number(hh) + 12;    
    if( !isPm && hh == 12 ) hh = '00';    
    
    return `${hh}:${mm}:${ss}`
}
