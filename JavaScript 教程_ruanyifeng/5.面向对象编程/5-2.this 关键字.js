/*1.涵义 # 
this关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。

前一章已经提到，this可以用在构造函数之中，表示实例对象。除此之外，this还可以用在别的场合。但不管是什么场合，this都有一个共同点：它总是返回一个对象。

简单说，this就是属性或方法“当前”所在的对象。

this.property
上面代码中，this就代表property属性当前所在的对象。

下面是一个实际的例子。*/

var person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

person.describe()
// "姓名：张三"

/*上面代码中，this.name表示name属性所在的那个对象。由于this.name是在describe方法中调用，而describe方法所在的当前对象是person，因此this指向person，this.name就是person.name。

由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的。
*/

var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var B = {
  name: '李四'
};

B.describe = A.describe;
B.describe()
// "姓名：李四"

/*上面代码中，A.describe属性被赋给B，于是B.describe就表示describe方法所在的当前对象是B，所以this.name就指向B.name。

稍稍重构这个例子，this的动态指向就能看得更清楚。*/

function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe() // "姓名：张三"
B.describe() // "姓名：李四"

/*上面代码中，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。

只要函数被赋给另一个变量，this的指向就会变。*/

var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var name = '李四';
var f = A.describe;
f() // "姓名：李四"

/*上面代码中，A.describe被赋值给变量f，内部的this就会指向f运行时所在的对象（本例是顶层对象）。

再看一个网页编程的例子。

<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">

<script>
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
</script>
上面代码是一个文本输入框，每当用户输入一个值，就会调用onChange回调函数，验证这个值是否在指定范围。浏览器会向回调函数传入当前对象，因此this就代表传入当前对象（即文本框），然后就可以从this.value上面读到用户的输入值。

总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，this就是函数运行时所在的对象（环境）。这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说，this的指向是动态的，没有办法事先确定到底指向哪个对象，这才是最让初学者感到困惑的地方。

实质
JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系。*/

var obj = { foo:  5 };

/*上面的代码将一个对象赋值给变量obj。JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。也就是说，变量obj是一个地址（reference）。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。

原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。

{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}

注意，foo属性的值保存在属性描述对象的value属性里面。

这样的结构是很清晰的，问题在于属性的值可能是一个函数。

var obj = { foo: function () {} };
这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。

{
  foo: {
    [[value]]: 函数的地址
    ...
  }
}

由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。*/

var f = function () {};
var obj = { f: f };

// 单独执行
f()

// obj 环境执行
obj.f()

//JavaScript 允许在函数体内部，引用当前环境的其他变量。

var f = function () {
  console.log(x);
};

/*上面代码中，函数体里面使用了变量x。该变量由运行环境提供。

现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
*/

var f = function () {
  console.log(this.x);
}

//上面代码中，函数体里面的this.x就是指当前运行环境的x。

var f = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
  f: f,
  x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2

/*上面代码中，函数f在全局环境执行，this.x指向全局环境的x；在obj环境执行，this.x指向obj.x。

使用场合
this主要有以下几个使用场合。

（1）全局环境

全局环境使用this，它指的就是顶层对象window。*/

this === window // true

function f() {
  console.log(this === window);
}
f() // true

/*上面代码说明，不管是不是在函数内部，只要是在全局环境下运行，this就是指顶层对象window。

（2）构造函数

构造函数中的this，指的是实例对象。*/

var Obj = function (p) {
  this.p = p;
};

//上面代码定义了一个构造函数Obj。由于this指向实例对象，所以在构造函数内部定义this.p，就相当于定义实例对象有一个p属性。

var o = new Obj('Hello World!');
o.p // "Hello World!"

/*（3）对象的方法

如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。

但是，这条规则很不容易把握。请看下面的代码。*/

var obj ={
  foo: function () {
    console.log(this);
  }
};

obj.foo() // obj

/*上面代码中，obj.foo方法执行时，它内部的this指向obj。

但是，下面这几种用法，都会改变this的指向。*/

// 情况一
(obj.foo = obj.foo)() // window
// 情况二
(false || obj.foo)() // window
// 情况三
(1, obj.foo)() // window

/*上面代码中，obj.foo就是一个值。这个值真正调用的时候，运行环境已经不是obj了，而是全局环境，所以this不再指向obj。

可以这样理解，JavaScript 引擎内部，obj和obj.foo储存在两个内存地址，称为地址一和地址二。obj.foo()这样调用时，是从地址一调用地址二，因此地址二的运行环境是地址一，this指向obj。但是，上面三种情况，都是直接取出地址二进行调用，这样的话，运行环境就是全局环境，因此this指向全局环境。上面三种情况等同于下面的代码。
*/

// 情况一
(obj.foo = function () {
  console.log(this);
})()
// 等同于
(function () {
  console.log(this);
})()

// 情况二
(false || function () {
  console.log(this);
})()

// 情况三
(1, function () {
  console.log(this);
})()

//如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。

var a = {
  p: 'Hello',
  b: {
    m: function() {
      console.log(this.p);
    }
  }
};

a.b.m() // undefined

//上面代码中，a.b.m方法在a对象的第二层，该方法内部的this不是指向a，而是指向a.b，因为实际执行的是下面的代码。

var b = {
  m: function() {
   console.log(this.p);
  }
};

var a = {
  p: 'Hello',
  b: b
};

(a.b).m() // 等同于 b.m()

//如果要达到预期效果，只有写成下面这样。

var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

//如果这时将嵌套对象内部的方法赋值给一个变量，this依然会指向全局对象。

var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

var hello = a.b.m;
hello() // undefined

//上面代码中，m是多层对象内部的一个方法。为求简便，将其赋值给hello变量，结果调用时，this指向了顶层对象。为了避免这个问题，可以只将m所在的对象赋值给hello，这样调用时，this的指向就不会变。

var hello = a.b;
hello.m() // Hello

/*使用注意点
避免多层 this
由于this的指向是不确定的，所以切勿在函数中包含多层的this。*/

var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}

o.f1()
// Object
// Window

//上面代码包含两层this，结果运行后，第一层指向对象o，第二层指向全局对象，因为实际执行的是下面的代码。

var temp = function () {
  console.log(this);
};

var o = {
  f1: function () {
    console.log(this);
    var f2 = temp();
  }
}

//一个解决方法是在第二层改用一个指向外层this的变量。

var o = {
  f1: function() {
    console.log(this);
    var that = this;
    var f2 = function() {
      console.log(that);
    }();
  }
}

o.f1()
// Object
// Object

/*上面代码定义了变量that，固定指向外层的this，然后在内层使用that，就不会发生this指向的改变。

事实上，使用一个变量固定this的值，然后内层函数调用这个变量，是非常常见的做法，请务必掌握。

JavaScript 提供了严格模式，也可以硬性避免这种问题。严格模式下，如果函数内部的this指向顶层对象，就会报错。*/

var counter = {
  count: 0
};
counter.inc = function () {
  'use strict';
  this.count++
};
var f = counter.inc;
f()
// TypeError: Cannot read property 'count' of undefined

/*上面代码中，inc方法通过'use strict'声明采用严格模式，这时内部的this一旦指向顶层对象，就会报错。

避免数组处理方法中的 this
数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。*/

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    });
  }
}

o.f()
// undefined a1
// undefined a2

/*上面代码中，foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值。原因跟上一段的多层this是一样的，就是内层的this不指向外部，而指向顶层对象。

解决这个问题的一种方法，就是前面提到的，使用中间变量固定this。*/

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    var that = this;
    this.p.forEach(function (item) {
      console.log(that.v+' '+item);
    });
  }
}

o.f()
// hello a1
// hello a2

//另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);
  }
}

o.f()
// hello a1
// hello a2
/*避免回调函数中的 this
回调函数中的this往往会改变指向，最好避免使用。*/

var o = new Object();
o.f = function () {
  console.log(this === o);
}

// jQuery 的写法
$('#button').on('click', o.f);

/*上面代码中，点击按钮以后，控制台会显示false。原因是此时this不再指向o对象，而是指向按钮的 DOM 对象，因为f方法是在按钮对象的环境中被调用的。这种细微的差别，很容易在编程中忽视，导致难以察觉的错误。

为了解决这个问题，可以采用下面的一些方法对this进行绑定，也就是使得this固定指向某个对象，减少不确定性。*/