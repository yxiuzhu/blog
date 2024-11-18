(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{420:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"箭头函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[t._v("#")]),t._v(" 箭头函数")]),t._v(" "),s("p",[t._v("箭头函数有几个使用注意点：")]),t._v(" "),s("ul",[s("li",[t._v("函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。")]),t._v(" "),s("li",[t._v("不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。")]),t._v(" "),s("li",[t._v("不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。")]),t._v(" "),s("li",[t._v("不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。")]),t._v(" "),s("li",[t._v("箭头函数可以让 this 指向固定化，绑定定义时所在的作用域，而不是指向运行时所在的作用域。这种特性很有利于封装回调函数。")]),t._v(" "),s("li",[t._v("除了 this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。")]),t._v(" "),s("li",[t._v("由于箭头函数没有自己的 this，所以当然也就不能用 call()、apply()、bind() 这些方法去改变 this 的指向。")])]),t._v(" "),s("h2",{attrs:{id:"普通函数和箭头函数的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通函数和箭头函数的区别"}},[t._v("#")]),t._v(" 普通函数和箭头函数的区别 "),s("Badge",{attrs:{text:"重点"}})],1),t._v(" "),s("ul",[s("li",[t._v("箭头函数的 this 指向规则(没有 this)")]),t._v(" "),s("li",[t._v("箭头函数的 arguments(没有 arguments)")]),t._v(" "),s("li",[t._v("使用 new 调用箭头函数会报错，即，不能作为构造函数")]),t._v(" "),s("li",[t._v("箭头函数不支持 new.target")]),t._v(" "),s("li",[t._v("箭头函数没有原型")]),t._v(" "),s("li",[t._v("箭头函数没有 super")]),t._v(" "),s("li",[t._v("箭头函数不支持重命名函数参数，普通函数的函数参数支持重命名")]),t._v(" "),s("li",[t._v("箭头函数不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。")]),t._v(" "),s("li",[t._v("箭头函数不能直接用 call()、apply()、bind() 这些方法去改变 this 的指向，但可以间接改变")])]),t._v(" "),s("h3",{attrs:{id:"箭头函数的-this-指向规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数的-this-指向规则"}},[t._v("#")]),t._v(" 箭头函数的 this 指向规则")]),t._v(" "),s("p",[t._v("箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。这就意味着如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。因为箭头函数没有 this，所以也不能用 call()、apply()、bind() 这些方法改变 this 的指向，但可以通过修改被继承的普通函数的 this 指向间接修改。")]),t._v(" "),s("ul",[s("li",[t._v("箭头函数没有 prototype(原型)，所以箭头函数本身没有 this。")]),t._v(" "),s("li",[t._v("箭头函数的 this 指向在定义的时候继承自外层第一个普通函数的 this。\n"),s("ul",[s("li",[t._v("箭头函数的 this 指向定义时所在的外层第一个普通函数，跟使用位置没有关系。")]),t._v(" "),s("li",[t._v("被继承的普通函数的 this 指向改变，箭头函数的 this 指向会跟着改变")])])]),t._v(" "),s("li",[t._v("不能直接修改箭头函数的 this 指向。但是，我们可以间接修改箭头函数的指向。去修改被继承的普通函数的 this 指向，然后箭头函数的 this 指向也会跟着改变")]),t._v(" "),s("li",[t._v("箭头函数外层没有普通函数，严格模式和非严格模式下它的 this 都会指向 window(全局对象)")])]),t._v(" "),s("p",[t._v("箭头函数实际上可以让 this 指向固定化，绑定 this 使得它不再可变，这种特性很有利于封装回调函数。")]),t._v(" "),s("p",[t._v("Babel 转箭头函数产生的 ES5 代码，就能清楚地说明 this 的指向")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数里面根本没有自己的 this，而是引用外层的 this")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _this "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h3",{attrs:{id:"箭头函数的-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数的-arguments"}},[t._v("#")]),t._v(" 箭头函数的 arguments")]),t._v(" "),s("p",[t._v("箭头函数没有自己的 arguments 对象，这不一定是件坏事，因为箭头函数可以访问外围函数的 arguments 对象。可以通过命名参数或者 rest 参数的形式访问参数。")]),t._v(" "),s("ul",[s("li",[t._v("如果箭头函数的 this 指向 window(全局对象)使用 arguments 会报错，未声明 arguments")]),t._v(" "),s("li",[t._v("箭头函数的 this 指向普通函数时，它的 argumens 继承于该普通函数")]),t._v(" "),s("li",[t._v("rest（...扩展符）参数获取函数的多余参数")])]),t._v(" "),s("h3",{attrs:{id:"new-调用箭头函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-调用箭头函数"}},[t._v("#")]),t._v(" new 调用箭头函数")]),t._v(" "),s("p",[t._v("不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。")]),t._v(" "),s("p",[t._v("JavaScript 函数有两个内部方法："),s("code",[t._v("[[Call]]")]),t._v(" 和 "),s("code",[t._v("[[Construct]]")]),t._v("。")]),t._v(" "),s("p",[t._v("当通过 new 调用函数时，执行 "),s("code",[t._v("[[Construct]]")]),t._v(" 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。当直接调用的时候，执行 "),s("code",[t._v("[[Call]]")]),t._v(" 方法，直接执行函数体。箭头函数并没有 "),s("code",[t._v("[[Construct]]")]),t._v(" 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。")]),t._v(" "),s("h3",{attrs:{id:"不支持-new-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不支持-new-target"}},[t._v("#")]),t._v(" 不支持 new.target")]),t._v(" "),s("p",[t._v("new.target 是 ES6 新引入的属性，普通函数如果通过 new 调用，new.target 会返回该函数的引用。此属性主要用于确定构造函数是否为 new 调用的。")]),t._v(" "),s("ul",[s("li",[t._v("箭头函数的 this 指向全局对象时，在箭头函数中使用 "),s("code",[t._v("new.target")]),t._v(" 会报错")]),t._v(" "),s("li",[t._v("箭头函数的 this 指向普通函数时，它的 "),s("code",[t._v("new.target")]),t._v(" 就是指向该普通函数的引用。")])]),t._v(" "),s("h3",{attrs:{id:"没有原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有原型"}},[t._v("#")]),t._v(" 没有原型")]),t._v(" "),s("p",[t._v("由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。")]),t._v(" "),s("h3",{attrs:{id:"没有-super"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有-super"}},[t._v("#")]),t._v(" 没有 super")]),t._v(" "),s("p",[t._v("连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("箭头函数与非箭头函数的区别")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("箭头函数本身没有 this")]),t._v("。所以需要通过查找作用域链来确定 this 的值。this 绑定的就是最近一层非箭头函数的 this。箭头函数外层如果没有非箭头函数，严格模式和非严格模式下它的 this 都会指向 window(全局对象)。不可以直接修改箭头函数的 this 指向。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数本身没有 argument")]),t._v("。可以通过扩展符代替 argument 获取函数的多余参数。箭头函数的 this 指向普通函数时，它的 argumens 继承于该普通函数。如果箭头函数的 this 指向 window(全局对象)使用 arguments 会报错，未声明 arguments。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数不能通过 new 调用")]),t._v("。箭头函数不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数不支持 new.target")]),t._v("。new.target 会返回该函数的引用。此属性主要用于确定构造函数是否为 new 调用的。箭头函数的 this 指向普通函数时，它的 "),s("code",[t._v("new.target")]),t._v(" 就是指向该普通函数的引用。箭头函数的 this 指向全局对象时，在箭头函数中使用 "),s("code",[t._v("new.target")]),t._v(" 会报错。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数没有原型")]),t._v("。由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数不支持 super")]),t._v("。连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 。")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数不支持重命名函数参数")]),t._v("，普通函数的函数参数支持重命名")]),t._v(" "),s("li",[s("strong",[t._v("箭头函数不可以使用 yield 命令")]),t._v("，因此箭头函数不能用作 Generator 函数。")])])]),t._v(" "),s("h2",{attrs:{id:"尾调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尾调用"}},[t._v("#")]),t._v(" 尾调用")]),t._v(" "),s("p",[s("strong",[t._v("尾调用（Tail Call）")]),t._v(" 是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数并返回，且调用发生在当前函数的末尾（即没有其他操作要执行）。")]),t._v(" "),s("p",[t._v("以下三种情况，都不属于尾调用。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况一 在调用 g(x) 之后还有额外的操作（赋值操作），所以这不符合尾调用的定义")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况二 g(x) 的调用结果被加 1 后才返回，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这意味着在调用 g(x) 之后还有额外的操作（加法操作），所以这也不符合尾调用的定义")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况三 虽然 g(x) 是在函数 f(x) 的末尾被调用，但没有返回 g(x)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("尾调用之所以与其他调用不同，就在于它的特殊的调用位置。")]),t._v(" "),s("p",[t._v("函数调用会在内存形成一个“调用记录”，又称 "),s("strong",[t._v("调用帧”（call frame）")]),t._v("，保存调用位置和内部变量等信息。")]),t._v(" "),s("p",[s("strong",[t._v("尾调用优化（Tail call optimization）")]),t._v(" : 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。")]),t._v(" "),s("p",[t._v("注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。")]),t._v(" "),s("p",[t._v("注意，目前只有 Safari 浏览器支持尾调用优化，Chrome 和 Firefox 都不支持。")]),t._v(" "),s("p",[t._v("注意，ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。")]),t._v(" "),s("ul",[s("li",[t._v("func.arguments：返回调用时函数的参数。")]),t._v(" "),s("li",[t._v("func.caller：返回调用当前函数的那个函数。")])]),t._v(" "),s("p",[s("strong",[t._v("尾递归")]),t._v("：尾调用自身。")]),t._v(" "),s("p",[s("strong",[t._v("尾递归优化")]),t._v("：尾递归之所以需要优化，原因是调用栈太多，造成溢出，那么只要减少调用栈，就不会溢出。怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”。")]),t._v(" "),s("h2",{attrs:{id:"函数的扩展其他特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的扩展其他特性"}},[t._v("#")]),t._v(" 函数的扩展其他特性")]),t._v(" "),s("p",[t._v("ES2017 允许函数的最后一个参数"),s("strong",[t._v("有尾逗号")]),t._v("。这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clownsEverywhere")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("param1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  param2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clownsEverywhere")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("ES2019 对函数实例的"),s("code",[t._v("toString()")]),t._v("方法做出了修改，明确要求返回一模一样的原始代码。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* foo comment */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function foo() {} 函数foo的原始代码包含注释，函数名foo和圆括号之间有空格，但是toString()方法都把它们省略了。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* foo comment */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "function /* foo comment */ foo () {}"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("ES2019 允许"),s("code",[t._v("catch")]),t._v("语句省略参数。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/85",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 系列之箭头函数"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);