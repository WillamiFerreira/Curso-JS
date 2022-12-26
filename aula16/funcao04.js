// 5! = 5 * 4 *3 * 2 * 1
//5! = 1 * 2 * 3 * 4 * 5
function fatorial(n){ 
    var fat = 1
    for (var c = n;c > 1; c--){
        fat *= c
    }
    return fat
}