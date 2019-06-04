// 函数表达式
const hongbao = (total, num) => {
    const arr = [];
    let restAmout = total,restNum = num;
    for(let i = 0;i<num-1;i++){
        // 前n-1发随机
        // 20*Math.random()
        let amount = parseFloat((Math.random()*(((restAmout/restNum)*2)-8))+4).toFixed(2);
        restAmout -= amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmout.toFixed(2));
    return arr;
}

console.log(hongbao(100, 10));