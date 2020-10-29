//1.用构造函数Vehicle生成一个实例对象, Vehicle有price属性(值為1000), 保存在变量v中, 並打印出來
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000

//2.如果忘了使用new命令，直接调用构造函数会发生什么事? 請打印v及price
var Vehicle = function (){
  this.price = 1000;
};

var v = Vehicle();
v // undefined
price // 1000

//3.如果忘了使用new命令，用'use strict'解决
function Fubar(foo, bar){
  'use strict';
  this._foo = foo;
  this._bar = bar;
}

Fubar()