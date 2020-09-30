 //匿名函式
 var msg = function() {
     return "hello world";
 }

console.log(msg())

//匿名函式自呼叫
(function() {
    var x = "Hello!!";
    console.log(x);
})();

//Lambda 函式
var foo = (x:number)=>10 + x 
console.log(foo(100))      //輸出結果為 110

//
var foo1 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
} 
foo1(100)

//
var func = (x)=> { 
    if(typeof x=="number") { 
        console.log(x+" 是一個數值") 
    } else if(typeof x=="string") { 
        console.log(x+" 是一個字串") 
    }  
} 
func(12) 
func("Tom")