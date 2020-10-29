//1.用var定義x, x賦值給y為? 1: 'a'

//2.填空, 原始类型值的转换, 填出轉換後的值
console.log(Number(324)) //
console.log(Number('324')) //
console.log(Number('324abc')) //
console.log(Number('')) //
console.log(Number(true)) //
console.log(Number(false)) //
console.log(Number(undefined)) //
console.log(Number(null)) //

//3.填空, 对象的转换, 填出轉換後的值
console.log()
console.log(Number({a: 1})) //
console.log(Number([1, 2, 3])) //
console.log(Number([5])) //

//4.寫出等同于底下的判斷程式碼
var obj = {x: 1};
Number(obj) // NaN

// 等同于


//5.填空, 原始类型值的转换, 填出轉換後的值
console.log()
console.log(String(123)) //
console.log(String('abc')) //
console.log(String(true)) //
console.log(String(undefined)) //
console.log(String(null)) //

//6.填空, 对象的转换, 填出轉換後的值
console.log()
console.log(String({a: 1})) //
console.log(String([1, 2, 3])) //

//7.寫出等同于底下的判斷程式碼
String({a: 1})
// "[object Object]"

// 等同于


//8.填空, 原始类型值的转换, 填出轉換後的值
console.log()
console.log(Boolean(undefined)) // 
console.log(Boolean(null)) //
console.log(Boolean(0)) //
console.log(Boolean(NaN)) //
console.log(Boolean('')) //
//当然，true和false这两个布尔值不会发生变化。
console.log(Boolean(true)) //
console.log(Boolean(false)) //
//注意，所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true（详见《原始类型值的包装对象》一章）。
console.log(Boolean({})) //
console.log(Boolean([])) //
console.log(Boolean(new Boolean(false))) //

//9.填空, 自动转换, 填出轉換後的值
console.log();
console.log(123 + 'abc') //

if ('abc') {
  console.log('hello')
}  //
//第三种情况，对非数值类型的值使用一元运算符（即+和-）。

console.log(+ {foo: 'bar'}) //
console.log(- [1, 2, 3]) //