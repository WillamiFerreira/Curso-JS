var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var c=1;c<num.length;c++){
    console.log(num[c])
}
//O for in é uma for otimizado para vetores
for(var c in num){
    console.log(num[c])
}
