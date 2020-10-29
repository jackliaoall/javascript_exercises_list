//1.建立物件obj有兩個key值(foo, bar), 值分別為'Hello'及'World'

/*2.填空
对象的所有键名都是
*/

//3.另一種寫法, 建立物件obj有兩個key值('foo', 'bar'), 值分別為'Hello'及'World'

//4.直接打出底下程式碼即可
var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a) // 1

o2.b = 2;
console.log(o1.b) // 2

//5.用兩種方式輸出屬性p
var obj = {
  p: 'Hello World'
};

//6.用兩種方式對obj的屬性赋值為foo => 'Hello'及bar => 'World'
var obj = {};

//7.用属性的“后绑定”方法新增属性
var obj = { p: 1 };

// 等价于

//8.用Object.keys方法查看属性
var obj = {
  key1: 1,
  key2: 2
};

//9.delete属性p, 並用Object.keys方法查看属性
var obj = { p: 1 };
Object.keys(obj) // ["p"]

//10.用in 运算符判斷属性是否存在
var obj = { p: 1 };

//11.用for...in 循环遍历一个对象的全部属性
var obj = {a: 1, b: 2, c: 3};

//12.用with 语句操作同一个对象的多个属性
var obj = {
  p1: 1,
  p2: 2,
};


// 等同于
