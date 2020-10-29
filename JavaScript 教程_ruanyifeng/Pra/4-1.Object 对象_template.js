//1.在Object对象定義print方法, 輸入o並打印出o

//2.用Object的实例方法改寫上面的範例, 實例化並打印

//3.用var定義obj, 並用Object()初始化

// 等同于


//4.用instanceof比較obj與Object

//5.填空, 填出instanceof比較後的值
var obj = Object(1);
obj instanceof Object //
obj instanceof Number //

var obj = Object('foo');
obj instanceof Object //
obj instanceof String //

var obj = Object(true);
obj instanceof Object //
obj instanceof Boolean //

//6.填空, 填出instanceof比較後的值
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr //

var value = {};
var obj = Object(value) // 返回原对象
obj === value //

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn //

//7.写一个判断变量是否为对象的函数isObject(value)

//8.填空
isObject([]) //
isObject(true) //

//9.用var定義obj, 並用new Object()初始化

//10.填空
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 //

var obj = new Object(123);
obj instanceof Number //