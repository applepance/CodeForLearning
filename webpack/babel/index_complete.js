'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 1,
    b = 2;
var c = a + b;

var mike = { name: 'mike', age: 40 };
mike = _extends({}, mike, { sex: '男'
  // [1,2,3].map(item => `*${item}*`)

  // class A {
  //   constructor(){
  //     this.name = 'name';
  //   }
  // }

});
