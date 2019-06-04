- 函数有多种运行方式
    Player() 普通方式,
    new Player() 作为构造函数constructor被运行，会有一个返回新对象->实例
    构造函数, 就是类,
    function Person() { }
- 函数是一等对象,可以被执行的对象
    this-> 借助 this 来构造新的对象
    var player1 = new Person()
    this => player1 Person {}
- new 的过程
    this 空对象Person {} 
    Person() 构造函数,
    this.name = name 