//1.用var定義arr, 初始化為[1,2], 並打印出長度
var arr = [1, 2];
arr.length

//2.用Array.isArray方法及typeof运算符打印出一個数组, 並比較不同
var arr = [1, 2, 3];
typeof arr // "object"
Array.isArray(arr) // true

//3.填空, typeof與Array.isArray()的值為
var arr = [1, 2, 3];
typeof arr //
Array.isArray(arr) //

//4.用valueOf方法返回数组
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]

//5.用toString方法返回数组的字符串形式
var arr = [1, 2, 3];
arr.toString() // "1,2,3"

//5.1
var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"

//6.將arr数组push進 1 'a' true {}, 並打印arr
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]

//7.將arr使用pop方法, 並打印arr
var arr = ['a', 'b', 'c'];

arr.pop() // 'c'
arr // ['a', 'b']

//8.对空数组使用pop方法，返回值為何?
[].pop() // undefined

//9.將a数组使用shif方法, 並打印a
var a = ['a', 'b', 'c'];

a.shift() // 'a'
a // ['b', 'c']

//10.用shift()方法遍历并清空一个数组
var list = [1, 2, 3, 4];
var item;

while (item = list.shift()) {
  console.log(item);
}

//10.1打印list
list // []

//11.用unshift()方法加入'x', 並打印a
var a = ['a', 'b', 'c'];

a.unshift('x'); // 4
a // ['x', 'a', 'b', 'c']

//11.1用unshift()方法加入'a' 'b', 並打印arr
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]

//12.用join()方法加入' ' or ' | ' or a.join()並打印
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"

//12.1填空, join()的值為
[undefined, null].join('#') // '#'
['a',, 'b'].join('-') // 'a--b'