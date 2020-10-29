/*1.概述
JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。*/

var x = y ? 1 : 'a';

/*上面代码中，变量x到底是数值还是字符串，取决于另一个变量y的值。
y为true时，x是一个数值；y为false时，x是一个字符串。这意味着，x的类型没法在编译阶段就知道，必须等到运行时才能知道。

2.强制转换
强制转换主要指使用Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。

2.1 Number()
使用Number函数，可以将任意类型的值转化成数值。

下面分成两种情况讨论，一种是参数是原始类型的值，另一种是参数是对象。

（1）原始类型值

原始类型值的转换规则如下。*/

// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

/*（2）对象

简单的规则是，Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。*/

Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5

/*之所以会这样，是因为Number背后的转换规则比较复杂。

第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤。

第二步，如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤。

第三步，如果toString方法返回的是对象，就报错。

请看下面的例子。*/

var obj = {x: 1};
Number(obj) // NaN

// 等同于
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}

/*2.2 String()
String函数可以将任意类型的值转化成字符串，转换规则如下。

（1）原始类型值

数值：转为相应的字符串。
字符串：转换后还是原来的值。
布尔值：true转为字符串"true"，false转为字符串"false"。
undefined：转为字符串"undefined"。
null：转为字符串"null"。*/

String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

/*（2）对象

String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。*/

String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"

/*String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序。

先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。

如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。

如果valueOf方法返回的是对象，就报错。

下面是一个例子。*/

String({a: 1})
// "[object Object]"

// 等同于
String({a: 1}.toString())
// "[object Object]"

/*2.3 Boolean()
Boolean()函数可以将任意类型的值转为布尔值。

它的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true。

undefined
null
0（包含-0和+0）
NaN
''（空字符串）*/

Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false

//当然，true和false这两个布尔值不会发生变化。

Boolean(true) // true
Boolean(false) // false

//注意，所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true（详见《原始类型值的包装对象》一章）。

Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true

/*3.自动转换
下面介绍自动转换，它是以强制转换为基础的。

遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见。

第一种情况，不同类型的数据互相运算。*/

123 + 'abc' // "123abc"
//第二种情况，对非布尔值类型的数据求布尔值。

if ('abc') {
  console.log('hello')
}  // "hello"
//第三种情况，对非数值类型的值使用一元运算符（即+和-）。

+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN

/*自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用String函数进行转换。如果该位置即可以是字符串，也可能是数值，那么默认转为数值。

由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用Boolean、Number和String函数进行显式转换。*/