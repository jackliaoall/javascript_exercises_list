//1.用function 命令建立函数print(s), 並輸出s
function print(s) {
  console.log(s);
}

//2.采用变量赋值的写法改寫
var print = function(s) {
  console.log(s);
};

//3.采用函数的name属性返回函数的名字
function f1() {}
f1.name // "f1"

//4.采用变量赋值的写法去返回函数的名字
var f2 = function () {};
f2.name // "f2"

//5.采用函数的length属性返回函数预期传入的参数个数
function f(a, b) {}
f.length // 2

//6.采用函数的toString()方法返回一个字符串，内容是函数的源码。
//函数f包含a() b() c()
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }

//7.填空, p各填不同的值, p的值為?
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2

//8.寫出闭包f1(含n=999)包f2(輸出n的值)
function f1() {
  var n = 999;
  function f2() {
　　console.log(n); // 999
  }
}

//9.利用闭包使得内部变量记住上一次调用时的运算结果。
//寫出函数createIncrementor
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7

//10.寫出()裡面包函数並打印出值就好
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());