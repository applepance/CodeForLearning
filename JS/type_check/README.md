类型 typeof
复杂数据类型 object
Array 是可遍历的对象
function 是可运行的对象
JSON Object对象字面量是可枚举的对象 for(keyin)
typeof 半吊子不可靠，typeof [] 没办法和json区分开
复杂数据中只能判断出function
有一个方法可以区分Array 和 JSON Object
Object.prototype.toString.call({})判断类型
(function(type) { 
    // type 会找到它定义时的上下文环境中的那个type
    Type['is' + type] = function() {
    console.log(type,'@@@@@@@@@@@@@@');
    }
})(type)
加括号可以立即执行，避免参数在用到之前就被清理
1. 用对象字面量来做面向对象 区别于原型式的
    它没有被实例化的需要的 Type，将在程序中的做类型检测
    var Type = {}; 组织代码
2. for 来一次性的加完 同步异步的问题
    使用闭包来将type 作用域封闭起来，
    立即执行函数，同步执行，类型检测函数的定义，因为函数嵌套，形成了闭包，当函数再次被调用时（异步），找到定义时刻的type
3. Object.prototype.toString.call(obj)
    Object? 祖先，顶级对象 函数才有prototype属性，原型上有这样的toString方法，解决typeof的尴尬"[object object]"
    [object Array] 方法的执行方式可以被改变
    Object.prototype.toString.call(obj)