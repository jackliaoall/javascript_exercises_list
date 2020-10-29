/*1.null 和 undefined
1.1概述
null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。*/

var a = undefined;
// 或者
var a = null;

//在if语句中，它们都会被自动转为false，相等运算符（==）甚至直接报告两者相等。

if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true

/*1.2用法和含义
对于null和undefined，大致可以像下面这样理解。

null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

undefined表示“未定义”，下面是返回undefined的典型场景。*/

// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined

/*2.布尔值
布尔值代表“真”和“假”两个状态。“真”用关键字true表示，“假”用关键字false表示。布尔值只有这两个值。

下列运算符会返回布尔值：

前置逻辑运算符： ! (Not)
相等运算符：===，!==，==，!=
比较运算符：>，>=，<，<=
如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

undefined
null
false
0
NaN
""或''（空字符串）
布尔值往往用于程序流程的控制，请看一个例子。*/

if ('') {
  console.log('true');
}

/*上面代码中，if命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值false，导致程序不会进入代码块，所以没有任何输出。

注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。*/

if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}
// true