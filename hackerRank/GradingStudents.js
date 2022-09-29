function gradingStudents(grades) {
    return grades.map(v => {
        if (v <= 37) return v;
        
        const restNum = v % 5;
        return restNum >= 3 ? v += ( 5 - restNum) : v;
    });
}