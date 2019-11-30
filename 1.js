function compare(a, b){
    if(a < b)   return -1;
    else if(a == b) return 0;
    else    return 1;
}
var sortedSquares = function(A) {
    //结果数组
    var resArr = [];
    //将A的平方一个个加到resArr中去
    for(var i = 0;i < A.length;i++){
        resArr.push(A[i] * A[i]);
    }
    //排序
    resArr.sort(compare);
    return resArr;
};

