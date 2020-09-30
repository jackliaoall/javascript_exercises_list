//1.建立一個物件陣列
var sites = [
    { "name":"twcode01" , "url":"www.twcode01.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }
];

//console.log(sites[0].name);
//你可以使用點號（.）來存取物件的值：
sites[0].name = "test";
console.log(sites[0].name);

//你也可以使用中括弧（[]）來存取物件的值：
sites[0]["name"] = "test1";
console.log(sites[0].name);

//2.迴圈物件
//你可以使用 for-in 來迴圈物件的屬性：
var myObj = { "name":"twcode01", "alexa":10000, "site":null };

for (x in myObj) {
    console.log(x);
}

//3.巢狀 JSON 物件
//JSON 物件中可以包含另外一個 JSON 物件：
myObj = {
    "name":"twcode01",
    "alexa":10000,
    "sites": {
        "site1":"www.twcode01.com",
        "site2":"m.twcode01.com",
        "site3":"www.twcode01.com"
    }
}

x = myObj.sites.site1;
// 或者
//x = myObj.sites["site1"];
console.log(x);

//4.刪除物件屬性
delete myObj.sites["sites1"];
//console.log(myObj);

//5.JSON.parse() 字串變物件
var obj = JSON.parse('{ "name":"twcode01", "alexa":10000, "site":"www.twcode01.com" }');
console.log(obj);

//6.JSON.stringify() 物件變字串
var obj = { "name":"twcode01", "alexa":10000, "site":"www.twcode01.com"};
var myJSON = JSON.stringify(obj);
console.log(typeof obj);
console.log(typeof myJSON);