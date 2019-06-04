
// S 5
// A 3
// B 2
// C 1
// D
// level key 计算函数?

let stratigies = {
    'S':salary=>salary*5,
    'A':salary=>salary*3,
    'B':salary=>salary*2,
    'C':salary=>salary*1,
    'D':0
}
function calculate(level, salary) {
    // let num;
    // switch (level) {
    //     case "S":
    //         num=5*salary;
    //         break;
    //     case "A":
    //         num=3*salary;
    //         break;
    //     case "B":
    //         num=2*salary;
    //         break;
    //     case "C":
    //         num=salary;
    //         break;
    //     default:
    //         num=0;
    //         break;
    // }
    // return num;
    return stratigies[level](salary);
}
console.log(calculate('S',4000))
console.log(stratigies['S'](4000))