/*1.简介
JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值，本教程不涉及。）

数值（number）：整数和小数（比如1和3.14）
字符串（string）：文本（比如Hello World）。
布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
null：表示空值，即此处的值为空。
对象（object）：各种值组成的集合。

(1)原始类型（primitive type）: 数值、字符串、布尔值这三种类型，它们是最基本的数据类型，不能再细分了。
(2)合成类型（complex type）: 对象则称为合成类型，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。
(3)至于undefined和null，一般将它们看成两个特殊值。

2.typeof 运算符
JavaScript 有三种方法，可以确定一个值到底是什么类型。

(1)typeof运算符
(2)instanceof运算符
(3)Object.prototype.toString方法
*/

//数值、字符串、布尔值分别返回number、string、boolean。
console.log(typeof 123)
console.log(typeof '123')
console.log(typeof false)

function f(){}
console.log(typeof f)

//undefined返回undefined。
console.log(typeof undefined)
console.log(typeof null)

//利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。
console.log()
//var v
console.log(typeof v)

/*
上面代码中，变量v没有用var命令声明，直接使用就会报错。但是，放在typeof后面，就不报错了，而是返回undefined。

实际编程中，这个特点通常用在判断语句。

// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
*/

//对象返回object。
console.log()
console.log(typeof window)
console.log(typeof {})
console.log(typeof [])

//上面代码中，空数组（[]）的类型也是object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。
//这里顺便提一下，instanceof运算符可以区分数组和对象。
var o = {};
var a = [];

console.log()
console.log(o instanceof Array) // false
console.log(a instanceof Array) // true