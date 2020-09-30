/*TypeScript 包含的資料型態如下:
1.任意型別	any	    宣告為 any 的變數可以賦予任意型別的值
2.數值型別	number	雙精度 64 位浮點值。它可以用來表示整數和分數
let binaryLiteral: number = 0b1010; // 二進位制
let octalLiteral: number = 0o744;    // 八進位
let decLiteral: number = 6;    // 十進位
let hexLiteral: number = 0xf00d;    // 十六進位

3.字串型別	string	一個字元系列，使用單引號（'）或雙引號（"）來表示字串型別。反引號（`）來定義多行文字和內嵌運算式
let name: string = "Twcode01";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 釋出 ${ years + 1} 周年`;

4.布林型別	boolean	表示邏輯值：true 和 false
let flag: boolean = true;

5.陣列型別	無	    宣告變數為陣列
// 在元素型別後面加上[]
let arr: number[] = [1, 2];

// 或者使用陣列泛型
let arr: Array<number> = [1, 2];

6.元組      無	    元組型別用來表示已知元素數量和型別的陣列，各元素的型別不必相同，對應位置的型別需要相同
let x: [string, number];
x = ['Twcode01', 1];    // 執行正常
x = [1, 'Twcode01'];    // 報錯
console.log(x[0]);    // 輸出 Twcode01

7.列舉	    enum	列舉型態用於定義數值群集
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 輸出 2

8.void	    void	用於標識方法回傳值的型別，表示該方法沒有回傳值
function hello(): void {
    alert("Hello Twcode01");
}

9.null	    null	表示物件值缺失
10.undefined	    undefined	用於初始化變數為一個未定義的值
11.never	        never	never 是其它型別（包括 null 和 undefined）的子類別型，代表從不會出現的值
*/

//最常用
let test: string ="Twcode01";
let years: number = 5;
let words: string = `${name} ${years + 1}`;

let flag: boolean = true;

let arr: number[] = [1,2];
let arr2: Array<number> = [1,2];

/*Any 型別
任意值是 TypeScript 針對程式設計時型別不明確的變數使用的一種資料型態，它常用於以下三種情況。

<p>1、變數的值會動態改變時，例如來自使用者的輸入，任意實值型別可以讓這些變數跳過編譯階段的型別檢查，示常式式碼如下：</p>*/

let x: any = 1;    // 數值型別
x = 'I am who I am';    // 字串型別
x = false;    // 布林型別
//改寫現有程式碼時，任意值允許在編譯時可選擇地包含或移除型別檢查，示常式式碼如下：

let x2: any = 4;
x.ifItExists();    // 正確，ifItExists方法在執行期可能存在，但這裡並不會檢查
x.toFixed();    // 正確
//定義儲存各種型別資料的陣列時，示常式式碼如下：

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;