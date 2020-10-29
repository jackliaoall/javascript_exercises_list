/*1.概述
1.1生成方法
对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

什么是对象？简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。*/

var obj = {
  foo: 'Hello',
  bar: 'World'
};

/*1.2键名
对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样。*/

var obj = {
  'foo': 'Hello',
  'bar': 'World'
};
//如果键名是数值，会被自动转为字符串。

var obj = {
  1: 'a',
  3.2: 'b',
  1e2: true,
  1e-2: true,
  .234: true,
  0xFF: true
};

console.log(obj)
// Object {
// '1': 'a',
// '100': true,
// '255': true,
// '3.2': 'b',
// '0.01': true,
// '0.234': true
// }

//obj['100'] // true

//如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

// 报错
// var obj = {
//   1p: 'Hello World'
// };

// 不报错
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};

// 1.3对象的引用
// 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a) // 1

o2.b = 2;
console.log(o1.b) // 2

// 1.4表达式还是语句？
// 对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

{ foo: 123 }

/*2.属性的操作
2.1属性的读取
读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。*/

var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
//上面代码分别采用点运算符和方括号运算符，读取属性p

// 2.2属性的赋值
// 点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';

// 上面代码中，分别使用点运算符和方括号运算符，对属性赋值。

// JavaScript 允许属性的“后绑定”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

var obj = { p: 1 };

// 等价于

var obj = {};
obj.p = 1;

// 2.3属性的查看
// 查看一个对象本身的所有属性，可以使用Object.keys方法。

var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']

// 2.4 属性的删除：delete 命令
// delete命令用于删除对象的属性，删除成功后返回true。

var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

// 上面代码中，delete命令删除对象obj的p属性。删除后，再读取p属性就会返回undefined，而且Object.keys方法的返回值也不再包括该属性。

// 注意，删除一个不存在的属性，delete不报错，而且返回true。

var obj = {};
delete obj.p // true

// 2.5 属性是否存在：in 运算符
// in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。它的左边是一个字符串，表示属性名，右边是一个对象。

var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

// 2.6 属性的遍历：for...in 循环
// for...in循环用来遍历一个对象的全部属性。

var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3

/*for...in循环有两个使用注意点。

它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
它不仅遍历对象自身的属性，还遍历继承的属性。*/

/*3. with 语句
with语句的格式如下：

with (对象) {
  语句;
}
它的作用是操作同一个对象的多个属性时，提供一些书写的方便。*/

// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}

// 等同于
/*console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
注意，如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量*/