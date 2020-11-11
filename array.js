function simpleArraySum(ar) {
    return ar.reduce(function(a,b){
        return a + b
    }, 0);
}
simpleArraySum([1, 2, 3, 4, 5]);
