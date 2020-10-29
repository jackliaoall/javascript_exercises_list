//1.填空
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false

Number('123') // 123
String(123) // "123"
Boolean(123) // true

//2.填空, valueOf()方法
new Number(123).valueOf()  // 123
new String('abc').valueOf() // "abc"
new Boolean(true).valueOf() // true

//toString()
new Number(123).toString() // "123"
new String('abc').toString() // "abc"
new Boolean(true).toString() // "true"

//3.用字符串調用length属性
'abc'.length // 3

//str要調用length属性
var str = 'abc';
str.length // 3

//4.強制修改s的x属性(s.x)為123
var s = 'Hello World';
s.x = 123;
s.x // undefined

//5.新增一个double方法,使得字符串和数字翻倍, 並用'abc'呼叫double()
String.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

'abc'.double()
// abcabc

//5.1修改double方法,使得数字翻倍, 並呼叫
Number.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

(123).double() // 246