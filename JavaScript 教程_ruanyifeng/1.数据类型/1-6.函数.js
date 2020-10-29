/*1.概述
1.1函数的声明
JavaScript 有三种声明函数的方法。

（1）function 命令

function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。
*/

function print(s) {
  console.log(s);
}

/*（2）函数表达式

除了用function命令声明函数，还可以采用变量赋值的写法。*/

var print = function(s) {
  console.log(s);
};

/*这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

var print = function x(){
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function*/

/*（3）Function 构造函数

第三种声明函数的方式是Function构造函数。*/

var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}

//总的来说，这种声明函数的方式非常不直观，几乎无人使用。

/*2.函数的属性和方法
2.1 name 属性
函数的name属性返回函数的名字。*/

function f1() {}
f1.name // "f1"

//如果是通过变量赋值定义的函数，那么name属性返回变量名。

var f2 = function () {};
f2.name // "f2"

// 2.2 length 属性
// 函数的length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

function f(a, b) {}
f.length // 2

// 2.3 toString()
// 函数的toString()方法返回一个字符串，内容是函数的源码。

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

/*4.参数
4.1概述
函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。*/

function square(x) {
  return x * x;
}

square(2) // 4
square(3) // 9

//上式的x就是square函数的参数。每次运行的时候，需要提供这个值，否则得不到结果。

/*4.2参数的省略
函数参数不是必需的，JavaScript 允许省略参数。*/

function f(a, b) {
  return a;
}

f(1, 2, 3) // 1
f(1) // 1
f() // undefined

f.length // 2

// 4.3传递方式
// 函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。

var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2

/*5.函数的其他知识点
5.1闭包
闭包（closure）是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。*/

var n = 999;

function f1() {
  console.log(n);
}
f1() // 999

/*上面代码中，函数f1可以读取全局变量n。

但是，正常情况下，函数外部无法读取函数内部声明的变量。*/

function f1() {
  var n = 999;
}

console.log(n)
// Uncaught ReferenceError: n is not defined(

/*上面代码中，函数f1内部声明的变量n，函数外是无法读取的。

如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。*/

function f1() {
  var n = 999;
  function f2() {
　　console.log(n); // 999
  }
}

// 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，
// 即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7

//闭包的另一个用处，是封装对象的私有属性和私有方法。

function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25

/*5.2立即调用的函数表达式（IIFE）
根据 JavaScript 的语法，圆括号()跟在函数名之后，表示调用该函数。比如，print()就表示调用print函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。*/

// function(){ /* code */ }();
// SyntaxError: Unexpected token (
//产生这个错误的原因是，function这个关键字即可以当作语句，也可以当作表达式。

// 语句
function f() {}

// 表达式
var f = function f() {}
//当作表达式时，函数可以定义后直接加圆括号调用。

var f = function f(){ return 1}();
f // 1

/*上面的代码中，函数定义后直接加圆括号调用，没有报错。原因就是function作为表达式，引擎就把函数定义当作一个值。这种情况下，就不会报错。

为了避免解析的歧义，JavaScript 规定，如果function关键字出现在行首，一律解释成语句。因此，引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

函数定义后立即调用的解决方法，就是不要让function出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。*/

(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();

/*上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表达式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。*/

// 报错
(function(){ /* code */ }())
(function(){ /* code */ }())

/*上面代码的两行之间没有分号，JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。*/

var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

//甚至像下面这样写，也是可以的。

!function () { /* code */ }();
~function () { /* code */ }();
-function () { /* code */ }();
+function () { /* code */ }();
//通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
//上面代码中，写法二比写法一更好，因为完全避免了污染全局变量

