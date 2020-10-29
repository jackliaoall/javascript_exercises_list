//1.用typeof顯示JavaScript的六種數據類型是什麼類型
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

//2.用typeof顯示函数
function f() {}
console.log()
console.log(typeof f)

//3.檢查一個名有聲明的變量
console.log()
if (typeof v === "undefined") {
    console.log("undefied")
}

//4.用typeof顯示window {} []
console.log()
console.log(typeof window) // "object"
console.log(typeof {}) // "object"
console.log(typeof []) // "object"

//5.用instanceof區分{} []
var o = {};
var a = [];

console.log(o instanceof Array) // false
console.log(a instanceof Array) // true