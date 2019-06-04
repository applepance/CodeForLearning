三角恋
三者 ? 构造函数 Constructor
prototype 原型
实例 instance

JS没有类，只有对象，都是通过原型来拿到的

通过构造函数 Person 生成了 person 这个实例，
同时我们在 Person 的原型 Person.prototype 定义了 getName 方法
person._proto_ 也是原型对象

构造函数 运行的，new Person() this-> 新的实例，空对象Person {} .name
实例怎么拿到原型对象的方法或属性?
1. 任何对象都有 _proto_ 私有属性，指这个对象的出处是哪?实例和类之间没有血缘关系，_proto_
2. 构造函数有 prototype 属性
3. 原型对象上有constructor 属性指向构造函数

JS 面向对象是基于原型的