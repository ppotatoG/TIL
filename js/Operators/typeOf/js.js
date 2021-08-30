const chkType = (tmp) => {
    return typeof(tmp);
}
console.log(chkType(1));
console.log(chkType('1'));
console.log(chkType('true'));
console.log(chkType(false));
console.log(chkType({a : 1}));
console.log(chkType([1, 2, 3, 4]));