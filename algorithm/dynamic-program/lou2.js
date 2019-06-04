// 什么可以存储之前的楼数？->变量
function lou(n) {
    if (n <= 0) {
        return 0;
    }
    if (n===1) {
        return 1;
    }
    if (n===2) {
        return 2;
    }
    var a=1,b=2,temp=0;
    for(var i = 3; i <= n; i++){
        temp = a+b;
        a=b;
        b=temp;
    }
    return temp;
}

console.log(lou(250));