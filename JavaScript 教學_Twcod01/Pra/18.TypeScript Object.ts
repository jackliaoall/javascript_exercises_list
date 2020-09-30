//物件是包含一組鍵值對的例項。 值可以是標量、函式、陣列、物件等，如下例項：
var sites = { 
    site1:"Twcode01", 
    site2:"Google" 
 }; 
 // 存取物件的值
 console.log(sites.site1) 
 console.log(sites.site2)

 //TypeScript 型別模板
 var sites = { 
    site1:"Twcode01", 
    site2:"Google" 
 };
 //這時如果我們想在物件中新增方法，可以做以下修改：
 sites.sayHello = function(){ return "hello";}
 
 //如果在 TypeScript 中使用以上方式則會出現編譯錯誤，因為Typescript 中的物件必須是特定型別的例項
 var sites = {
    site1: "Twcode01",
    site2: "Google",
    sayHello: function () { } // 型別模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();

//此外物件也可以作為一個引數傳遞給函式，如下例項：
var sites = { 
    site1:"Twcode01", 
    site2:"Google",
}; 
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites)