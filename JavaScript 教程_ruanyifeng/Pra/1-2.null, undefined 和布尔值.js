//1.用if包undefined及用null打印出訊息
if (!undefined) {
  console.log('undefined is false');
}

if (!null) {
  console.log('null is false');
}

//2.打印出undefined == null及undefined === null
console.log(undefined == null)
console.log(undefined === null)

/*3.填空
null表示
undefined表示
*/

//4.用個變數輸入函數值且函數執行後輸出為undefined
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
console.log(f()) // undefined

//5.打印出物件o的屬性為undefined
var  o = new Object();
console.log(o.p) // undefined

//6.打印出函数返回值為undefined
function f() {}
console.log(f()) // undefined

/*7.填空,转换规则是除了下面六个值被转为false，其他值都视为true。
為哪六個值

undefined
null
false
0
NaN
""或''（空字符串）
布尔值往往用于程序流程的控制，请看一个例子。*/

//8.打印出if('')的...
if ('') {
  console.log('true1');
}

//9.打印出if([])的...
if ([]) {
  console.log('true2');
}
// true

//10.打印出if({})的...
if ({}) {
  console.log('true3');
}
// true