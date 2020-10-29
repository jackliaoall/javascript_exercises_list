/*JavaScript 提供定时执行代码的功能，叫做定时器（timer），主要由setTimeout()和setInterval()这两个函数来完成。它们向任务队列添加定时任务。

1. setTimeout()
setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

var timerId = setTimeout(func|code, delay);
上面代码中，setTimeout函数接受两个参数，第一个参数func|code是将要推迟执行的函数名或者一段代码，第二个参数delay是推迟执行的毫秒数。
*/

console.log(1);
setTimeout('console.log(2)',1000);
console.log(3);
// 1
// 3
// 2

/*上面代码会先输出1和3，然后等待1000毫秒再输出2。注意，console.log(2)必须以字符串的形式，作为setTimeout的参数。

如果推迟执行的是函数，就直接将函数名，作为setTimeout的参数。*/

function f() {
  console.log(2);
}

setTimeout(f, 1000);
//setTimeout的第二个参数如果省略，则默认为0。

setTimeout(f)
// 等同于
setTimeout(f, 0)
//除了前两个参数，setTimeout还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。

setTimeout(function (a,b) {
  console.log(a + b);
}, 1000, 1, 1);

/*上面代码中，setTimeout共有4个参数。最后那两个参数，将在1000毫秒之后回调函数执行时，作为回调函数的参数。

还有一个需要注意的地方，如果回调函数是对象的方法，那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象。
*/

var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(obj.y, 1000) // 1

/*上面代码输出的是1，而不是2。因为当obj.y在1000毫秒后运行时，this所指向的已经不是obj了，而是全局环境。

为了防止出现这个问题，一种解决方法是将obj.y放入一个函数。*/

var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(function () {
  obj.y();
}, 1000);
// 2

/*上面代码中，obj.y放在一个匿名函数之中，这使得obj.y在obj的作用域执行，而不是在全局作用域内执行，所以能够显示正确的值。

另一种解决方法是，使用bind方法，将obj.y这个方法绑定在obj上面。*/

var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(obj.y.bind(obj), 1000)
// 2

/*2. setInterval()
setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。
*/

var i = 1
var timer = setInterval(function() {
  console.log(2);
}, 1000)

/*上面代码中，每隔1000毫秒就输出一个2，会无限运行下去，直到关闭当前窗口。

与setTimeout一样，除了前两个参数，setInterval方法还可以接受更多的参数，它们会传入回调函数。

下面是一个通过setInterval方法实现网页动画的例子。*/

var div = document.getElementById('someDiv');
var opacity = 1;
var fader = setInterval(function() {
  opacity -= 0.1;
  if (opacity >= 0) {
    div.style.opacity = opacity;
  } else {
    clearInterval(fader);
  }
}, 100);

/*上面代码每隔100毫秒，设置一次div元素的透明度，直至其完全透明为止。

setInterval的一个常见用途是实现轮询。下面是一个轮询 URL 的 Hash 值是否发生变化的例子。*/

var hash = window.location.hash;
var hashWatcher = setInterval(function() {
  if (window.location.hash != hash) {
    updatePage();
  }
}, 1000);

/*setInterval指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的时间。因此实际上，两次执行之间的间隔会小于指定的时间。比如，setInterval指定每 100ms 执行一次，每次执行需要 5ms，那么第一次执行结束后95毫秒，第二次执行就会开始。如果某次执行耗时特别长，比如需要105毫秒，那么它结束后，下一次执行就会立即开始。

为了确保两次执行之间有固定的间隔，可以不用setInterval，而是每次执行结束后，使用setTimeout指定下一次执行的具体时间。*/

var i = 1;
var timer = setTimeout(function f() {
  // ...
  timer = setTimeout(f, 2000);
}, 2000);

//上面代码可以确保，下一次执行总是在本次执行结束之后的2000毫秒开始。