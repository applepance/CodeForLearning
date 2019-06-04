// 玩家1 玩家2.....n
// object 类
// JSON object 难以完成这种关系

// 玩家类 es5 没有 Class 关键字
// 大写字母的函数 构造函数
// 函数可以用来构建类
// 一个函数首字母大写约束，区别于普通函数
// 运行的方式为 new，此函数被称为构造函数
// 函数是 JS 里的一等对象，除了基本数据类型之外，都是对象Object ，函数是可以被运行的对象
function Player(name){
    // JS函数和其他语言不一样，函数一定会存在一个this，指针，一定总会只想点什么
    // this会指向实例化后的对象
    this.name = name;
    this.enemy = null;
    console.log(this);
}
Player.prototype.win = function (){
    console.log(this.name + "win");
}
Player.prototype.lose = function (){
    console.log(this.name + "lose");
}
// Player();
// 将类实例化 类是一个抽象的概念，对象可以 new 一个出来
// new的过程=>
var player1 = new Player("泡泡");
var player2 = new Player("皮蛋");
// 成为对手的过程 来一把
player1.enemy = player2;
player2.enemy = player1;

// 游戏的过程
player1.win();
player2.lose();
// console.log(player1.name);
// var player2 = new Player("皮蛋");
// console.log(player2.name);
