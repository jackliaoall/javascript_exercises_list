//語法
var txt = new String("string");
//或者更簡單方式：
var txt1 = "string";

//String 物件屬性
//1.constructor 對建立該物件的函式的引用
var str = new String( "This is string" ); 
console.log("str.constructor is:" + str.constructor);

//2.length 回傳字串的長度
var uname = new String("Hello World") 
console.log("Length "+uname.length)  // 輸出 11

//3.prototype 允許您向物件新增屬性和方法
function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
 } 

 var emp = new employee(123,"admin") 
 employee.prototype.email="admin@twcode01.com" // 新增屬性 email
 console.log("員工號: "+emp.id) 
 console.log("員工姓名: "+emp.name) 
 console.log("員工郵箱: "+emp.email)