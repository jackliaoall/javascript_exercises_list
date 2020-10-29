/*1.概述 # 
Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。

注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重复，更完整的介绍请看《ES6 标准入门》的《Promise 对象》一章。

首先，Promise 是一个对象，也是一个构造函数。*/

function f1(resolve, reject) {
  // 异步代码...
}

var p1 = new Promise(f1);

/*上面代码中，Promise构造函数接受一个回调函数f1作为参数，f1里面是异步操作的代码。然后，返回的p1就是一个 Promise 实例。

Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个then方法，用来指定下一步的回调函数。*/

var p1 = new Promise(f1);
p1.then(f2);

/*上面代码中，f1的异步操作执行完成，就会执行f2。

传统的写法可能需要把f2作为回调函数传入f1，比如写成f1(f2)，异步操作完成后，在f1内部调用f2。Promise 使得f1和f2变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。
*/

// 传统写法
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // ...
      });
    });
  });
});

// Promise 的写法
(new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);

/*从上面代码可以看到，采用 Promises 以后，程序流程变得非常清楚，十分易读。注意，为了便于理解，上面代码的Promise实例的生成格式，做了简化，真正的语法请参照下文。

总的来说，传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise 就是解决这个问题，使得异步流程可以写成同步流程。

Promise 原本只是社区提出的一个构想，一些函数库率先实现了这个功能。ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。

2. Promise 对象的状态
Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作失败（rejected）
上面三种状态里面，fulfilled和rejected合在一起称为resolved（已定型）。

这三种的状态的变化途径只有两种。

从“未完成”到“成功”
从“未完成”到“失败”
一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。

因此，Promise 的最终结果只有两种。

异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。

3. Promise 构造函数
JavaScript 提供原生的Promise构造函数，用来生成 Promise 实例。*/

var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){ 
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});

/*上面代码中，Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。

resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

下面是一个例子。*/

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100)

/*上面代码中，timeout(100)返回一个 Promise 实例。100毫秒以后，该实例的状态会变为fulfilled。

4. Promise.prototype.then()
Promise 实例的then方法，用来添加回调函数。

then方法可以接受两个回调函数，第一个是异步操作成功时（变为fulfilled状态）的回调函数，第二个是异步操作失败（变为rejected）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。
*/

var p1 = new Promise(function (resolve, reject) {
  resolve('成功');
});
p1.then(console.log, console.error);
// "成功"

var p2 = new Promise(function (resolve, reject) {
  reject(new Error('失败'));
});
p2.then(console.log, console.error);
// Error: 失败

/*上面代码中，p1和p2都是Promise 实例，它们的then方法绑定两个回调函数：成功时的回调函数console.log，失败时的回调函数console.error（可以省略）。p1的状态变为成功，p2的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。

then方法可以链式使用。*/

p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );

/*上面代码中，p1后面有四个then，意味依次有四个回调函数。只要前一步的状态变为fulfilled，就会依次执行紧跟在后面的回调函数。

最后一个then方法，回调函数是console.log和console.error，用法上有一点重要的区别。console.log只显示step3的返回值，而console.error可以显示p1、step1、step2、step3之中任意一个发生的错误。举例来说，如果step1的状态变为rejected，那么step2和step3都不会执行了（因为它们是resolved的回调函数）。Promise 开始寻找，接下来第一个为rejected的回调函数，在上面代码中是console.error。这就是说，Promise 对象的报错具有传递性。

5. then() 用法辨析
Promise 的用法，简单说就是一句话：使用then方法添加回调函数。但是，不同的写法有一些细微的差别，请看下面四种写法，它们的差别在哪里？
*/

// 写法一
f1().then(function () {
  return f2();
});

// 写法二
f1().then(function () {
  f2();
});

// 写法三
f1().then(f2());

// 写法四
f1().then(f2);

//为了便于讲解，下面这四种写法都再用then方法接一个回调函数f3。写法一的f3回调函数的参数，是f2函数的运行结果。

f1().then(function () {
  return f2();
}).then(f3);

//写法二的f3回调函数的参数是undefined。

f1().then(function () {
  f2();
  return;
}).then(f3);

//写法三的f3回调函数的参数，是f2函数返回的函数的运行结果。

f1().then(f2())
  .then(f3);

  //写法四与写法一只有一个差别，那就是f2会接收到f1()返回的结果。

f1().then(f2)
  .then(f3);