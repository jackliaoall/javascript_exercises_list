//1.在Object对象定義print方法, 輸入o並打印出o
Object.print = function (o) { console.log(o) };

//2.用Object的实例方法改寫上面的範例, 實例化並打印
Object.prototype.print = function () {
  console.log(this);
};

var obj = new Object();
obj.print() // Object

//3.用var定義obj, 並用Object()初始化
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

//4.用instanceof比較obj與Object
obj instanceof Object // true

//5.填空, 填出instanceof比較後的值
var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true

//6.填空, 填出instanceof比較後的值
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true

//7.写一个判断变量是否为对象的函数isObject(value)
function isObject(value) {
  return value === Object(value);
}

//8.填空
isObject([]) // true
isObject(true) // false

//9.用var定義obj, 並用new Object()初始化
var obj = new Object();

//10.填空
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true