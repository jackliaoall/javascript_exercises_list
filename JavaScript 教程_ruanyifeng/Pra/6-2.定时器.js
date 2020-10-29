//1.在底下用setTimeout一秒後打印出2, 輸出結果為?
console.log(1);
setTimeout('console.log(2)',1000);
console.log(3);
// 1
// 3
// 2

//2.用函式f取代setTimeout的'console.log(2)'
function f() {
  console.log(2);
}

//3.用setInterval()每隔1000毫秒就输出一个2
var i = 1
var timer = setInterval(function() {
  console.log(2);
}, 1000)