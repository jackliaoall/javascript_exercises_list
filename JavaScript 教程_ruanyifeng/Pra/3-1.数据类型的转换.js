//1.用var定義x, x賦值給y為? 1: 'a'
var y;
var x = y ? 1 : 'a';

//2.填空, 原始类型值的转换, 填出轉換後的值
console.log(Number(324)) // 324
console.log(Number('324')) // 324
console.log(Number('324abc')) // NaN
console.log(Number('')) // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0

//3.填空, 对象的转换, 填出轉換後的值
console.log()
console.log(Number({a: 1})) // NaN
console.log(Number([1, 2, 3])) // NaN
console.log(Number([5])) // 5

//4.寫出等同于底下的判斷程式碼
var obj = {x: 1};
Number(obj) // NaN

// 等同于
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}

//5.填空, 原始类型值的转换, 填出轉換後的值
console.log()
console.log(String(123)) // "123"
console.log(String('abc')) // "abc"
console.log(String(true)) // "true"
console.log(String(undefined)) // "undefined"
console.log(String(null)) // "null"

//6.填空, 对象的转换, 填出轉換後的值
console.log()
console.log(String({a: 1})) // "[object Object]"
console.log(String([1, 2, 3])) // "1,2,3"

//7.寫出等同于底下的判斷程式碼
String({a: 1})
// "[object Object]"

// 等同于
String({a: 1}.toString())
// "[object Object]"

//8.填空, 原始类型值的转换, 填出轉換後的值
console.log()
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false
//当然，true和false这两个布尔值不会发生变化。
console.log(Boolean(true)) // true
console.log(Boolean(false)) // false
//注意，所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true（详见《原始类型值的包装对象》一章）。
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(new Boolean(false))) // true

//9.填空, 自动转换, 填出轉換後的值
console.log();
console.log(123 + 'abc') // "123abc"

if ('abc') {
  console.log('hello')
}  // "hello"
//第三种情况，对非数值类型的值使用一元运算符（即+和-）。

console.log(+ {foo: 'bar'}) // NaN
console.log(- [1, 2, 3]) // NaN