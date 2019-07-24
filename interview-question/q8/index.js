// // function Person(name) {
// //   this.name = name;
// // }

// // let p = new Person('wn');
// // p.__proto__ = Person.prototype
// // Person.__protp__ = Function.prototype

// var foo = {},
//   F = function () { };
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// function Person(name) {
//   this.name = name;
//   return 666
//   // return {}
// }

// let p = new Person('wn');
// console.log(p)
// // ---构造函数是不需要返回值的，使用new来创建时，如果return 的时非对象，会忽略返回值，如果是对象。则返回该对象(return null也会忽略返回值)

// function Person(name) {
//   this.name = name;
// }

// function Student() { }

// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;
// let p = new Student('wn');
// console.log(p instanceof Person)

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0)
// }

// // let 每次循环都会创建一个封闭的块级作用域和setTimeout绑定，而var每次循环都会替换上一个变量

// // for in 和 for of 有什么区别
// Array.prototype.method = function () {
//   console.log('wn')
// }
// var myArray = [1, 2, 3, 4, 5, 6, 7]
// for (let index in myArray) {
//   console.log(myArray[index])
// }

// for in 
// 1. index是索引 为字符串型数字，不能进行几何运算
// 2. 遍历的顺序是有可能不是按照实际数组的内部顺序
// 3. 使用 for in 会遍历数组所有的可枚举属性，包括原型
// for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引(键名)，而 for of 遍历的是数组的元素
// for of 遍历的只是数组的元素，不包括原型属性和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]];

function output(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      // res = res.concat(output(arr[i]))
      let now = output(arr[i]);
      res = [...res, ...now]
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

console.log(outputArr(gArr))

function outputArr(arr) {
  return arr.reduce((pre, item)=>{
    return pre.concat(Array.isArray(item) ? outputArr(item) : [item])
  },[])
}
