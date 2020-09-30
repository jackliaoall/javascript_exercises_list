var site1="Google";
var site2="Twcode01";
var site3="Taobao";

//簡化成陣列
var sites:string[]; 
sites = ["Google","Twcode01","Taobao"]

//如果陣列宣告時未設定型別，則會被認為是 any 型別，在初始化時根據第一個元素的型別來推斷陣列的型別
//建立一個 number 型別的陣列：
var numlist:number[] = [2,4,6,8]

//索引值第一個為 0，我們可以根據索引值來存取陣列元素：
var sites:string[]; 
sites = ["Google","Twcode01","Taobao"] 
console.log(sites[0]); 
console.log(sites[1]);

//以下例項我們在宣告時直接初始化：
var nums:number[] = [1,2,3,4] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

/*
Array 物件
我們也可以使用 Array 物件建立陣列。

Array 物件的建構函式接受以下兩種值：

表示陣列大小的數值。
初始化的陣列串列，元素使用逗號分隔值
*/
var arr_names:number[] = new Array(4)  
 
for(var i = 0; i<arr_names.length; i++) { 
        arr_names[i] = i * 2 
        console.log(arr_names[i]) 
}

//以下例項我們直接初始化陣列元素：
var sites:string[] = new Array("Google","Twcode01","Taobao","Facebook") 
 
for(var i = 0;i<sites.length;i++) { 
        console.log(sites[i]) 
}

/*
陣列解構
我們也可以把陣列元素賦值給變數，如下所示：
*/
var arr:number[] = [12,13] 
var[x,y] = arr // 將陣列的兩個元素賦值給變數 x 和 y
console.log(x) 
console.log(y)

//陣列迭代
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 
 
for(j in nums) { 
    console.log(nums[j]) 
}

/*
陣列在函式中的使用
作為引數傳遞給函式
*/

var sites:string[] = new Array("Google","Twcode01","Taobao","Facebook") 
 
function disp(arr_sites:string[]) {
        for(var i = 0;i<arr_sites.length;i++) { 
                console.log(arr_sites[i]) 
        }  
}  
disp(sites);

//作為函式的回傳值
function disp1():string[] { 
   return new Array("Google", "Twcode01", "Taobao", "Facebook");
} 

var sites:string[] = disp1() 
for(var i in sites) { 
   console.log(sites[i]) 
}

/*陣列方法
下表列出了一些常用的陣列方法：
Ref: https://www.twcode01.com/typescript/ts-array.html
*/

//1.	concat()
//連接兩個或更多的陣列，並回傳結果。

var alpha = ["a", "b", "c"]; 
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric );    // a,b,c,1,2,3

//2.	every()
//檢測數值元素的每個元素是否都符合條件。

function isBigEnough(element, index, array) { 
        return (element >= 10); 
} 
        
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed ); // false

//3.	filter()
//檢測數值元素，並回傳符合條件所有元素的陣列。

function isBigEnough(element, index, array) { 
   return (element >= 10); 
} 
          
var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log("Test Value : " + passed ); // 12,130,44

//4.	forEach()
//陣列每個元素都執行一次回呼函式。

let num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
}); 

//5.	indexOf()
//搜尋陣列中的元素，並回傳它所在的位置。

var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );  // 2

//6.	join()
//把陣列的所有元素放入一個字串。

var arr = new Array("First","Second","Third"); 
          
var str = arr.join(); 
console.log("str : " + str );  // First,Second,Third 
          
var str = arr.join(", "); 
console.log("str : " + str );  // First, Second, Third
          
var str = arr.join(" + "); 
console.log("str : " + str );  // First + Second + Third

//7.	lastIndexOf()
//回傳一個指定的字串值最後出現的位置，在一個字串中的指定位置從後向前搜尋。

var index = [12, 5, 8, 130, 44].lastIndexOf(8); 
console.log("index is : " + index );  // 2

//8.	map()
//透過指定函式處理陣列的每個元素，並回傳處理後的陣列。

var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );  // 1,2,3

//9.	pop()
//刪除陣列的最後一個元素並回傳刪除的元素。

var numbers = [1, 4, 9]; 
          
var element = numbers.pop(); 
console.log("element is : " + element );  // 9
          
var element = numbers.pop(); 
console.log("element is : " + element );  // 4

//10.	push()
//向陣列的末尾新增一個或更多元素，並回傳新的長度。

var numbers = new Array(1, 4, 9); 
var length = numbers.push(10); 
console.log("new numbers is : " + numbers );  // 1,4,9,10 
length = numbers.push(20); 
console.log("new numbers is : " + numbers );  // 1,4,9,10,20

//11.	reduce()
//將陣列元素計算為一個值（從左到右）。

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );  // 6

//12.	reduceRight()
//將陣列元素計算為一個值（從右到左）。

var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; }); 
console.log("total is : " + total );  // 6

//13.	reverse()
//反轉陣列的元素順序。

var arr = [0, 1, 2, 3].reverse(); 
console.log("Reversed array is : " + arr );  // 3,2,1,0

//14.	shift()
//刪除並回傳陣列的第一個元素。

var arr = [10, 1, 2, 3].shift(); 
console.log("Shifted value is : " + arr );  // 10

//15.	slice()
//選取陣列的的一部分，並回傳一個新陣列。

var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  // mango
console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );  // mango,banana

//16.	some()
//檢測陣列元素中是否有元素符合指定條件。

function isBigEnough(element, index, array) { 
   return (element >= 10); 
          
} 
          
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval );  // false
          
var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
console.log("Returned value is : " + retval );  // true

//17.	sort()
//對陣列的元素進行排序。

var arr = new Array("orange", "mango", "banana", "sugar"); 
var sorted = arr.sort(); 
console.log("Returned string is : " + sorted );  // banana,mango,orange,sugar

//18.	splice()
//從陣列中新增或刪除元素。

var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea 
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea 
console.log("removed is: " + removed);  // banana

//19.	toString()
//把陣列轉換為字串，並回傳結果。

var arr = new Array("orange", "mango", "banana", "sugar");         
var str = arr.toString(); 
console.log("Returned string is : " + str );  // orange,mango,banana,sugar

//20.	unshift()
//向陣列的開頭新增一個或更多元素，並回傳新的長度。

var arr = new Array("orange", "mango", "banana", "sugar"); 
var length = arr.unshift("water"); 
console.log("Returned array is : " + arr );  // water,orange,mango,banana,sugar 
console.log("Length of the array is : " + length ); // 5