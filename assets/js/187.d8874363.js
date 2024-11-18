(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{526:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── components  // 两个组件\n│   ├── link.js   // route-link组件的实现\n│   └── view.js   // route-view组件的实现\n├── history  // 路由历史记录的处理\n│   ├── abstract.js  // 非浏览器的history\n│   ├── base.js    // History 基类\n│   ├── hash.js    // hash模式的history\n│   └── html5.js   // html5模式的history\n└── util   // 工具类库\n    ├── async.js    // runQueue 异步操作的工具库\n    ├── dom.js    // 判断是否在浏览器环境\n    ├── location.js    // 对 location 的处理\n    ├── misc.js     // 一个工具方法 extend \n    ├── params.js   // 处理参数\n    ├── path.js     // 处理路径\n    ├── push-state.js  // 处理html模式的 pushState\n    ├── query.js  //对query的处理\n    ├── resolve-components.js  //异步加载组件 \n    ├── route.js  // 创建路由\n    ├── scroll.js  //处理滚动\n    └── warn.js  // 打印一些警告\n├── create-matcher.js  // 路由匹配\n├── create-route-map.js  // 路由映射与路由过渡\n├── index.js   // 入口文件\n├── install.js  // 插件安装的方法\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"使用-vue-router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-router"}},[s._v("#")]),s._v(" 使用 vue-router")]),s._v(" "),t("p",[s._v("我们使用 "),t("code",[s._v("vue-router")]),s._v(" 时主要有以下几步：")]),s._v(" "),t("ul",[t("li",[s._v("第一步  "),t("code",[s._v("npm install vue-router --save")])]),s._v(" "),t("li",[s._v("第二步  导入"),t("code",[s._v("Vue")]),s._v("和"),t("code",[s._v("VueRoute")]),s._v(" "),t("code",[s._v("模块化机制编程,要通过Vue.use(VueRouter)")])]),s._v(" "),t("li",[s._v("第三步  定义"),t("code",[s._v("组件")]),s._v("(路由组件)")]),s._v(" "),t("li",[s._v("第四步  定义"),t("code",[s._v("路由")]),s._v("(定义路由与组件映射表)【routes】")]),s._v(" "),t("li",[s._v("第五步  创建"),t("code",[s._v("配置参数实例")]),s._v("【router】 "),t("code",[s._v("const router = new VueRouter({routes:routes})")]),s._v(" 其中 routes 是参数")]),s._v(" "),t("li",[s._v("第六步  创建和挂载根实例并将"),t("code",[s._v("router注入路由")]),s._v(" "),t("code",[s._v("new Vue({router:router}).$mount('#app')")]),s._v(" 其中 router 是参数")])]),s._v(" "),t("p",[s._v("以上是自己总结的使用步骤，下面是官方的例子 "),t("a",{attrs:{href:"https://router.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://router.vuejs.org/zh/guide/"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[s._v("#")]),s._v(" HTML")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Hello App!"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 使用 router-link 组件来导航. --\x3e")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 通过传入 `to` 属性指定链接. --\x3e")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- <router-link> 默认会被渲染成一个 `<a>` 标签 --\x3e")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Go to Foo"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Go to Bar"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 路由出口 --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 路由匹配到的组件将渲染在这里 --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-view")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-view")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 定义 (路由) 组件。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以从其他文件 import 进来")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<div>foo</div>'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<div>bar</div>'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 定义路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 每个路由应该映射一个组件。 其中"component" 可以是')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 Vue.extend() 创建的组件构造器，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者，只是一个组件配置对象。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们晚点再讨论嵌套路由。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" routes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Foo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Bar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 创建 router 实例，然后传 `routes` 配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你还可以传别的配置参数, 不过先这么简单着吧。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VueRouter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  routes "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (缩写) 相当于 routes: routes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 创建和挂载根实例。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记得要通过 router 配置参数注入路由，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从而让整个应用都有路由功能")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  router\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$mount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 现在，应用已经启动了")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[t("code",[s._v("VueRouter")]),s._v(" 原型上也定义了一系列的函数，比如 ："),t("code",[s._v("push")]),s._v(" 、 "),t("code",[s._v("replace")]),s._v(" 、  "),t("code",[s._v("go")]),s._v(" 、 "),t("code",[s._v("back")]),s._v(" 和 "),t("code",[s._v("forward")]),s._v(" 。定义了一些导航守卫 ： "),t("code",[s._v("beforeEach")]),s._v(" 、"),t("code",[s._v("beforeResolve")]),s._v(" 及 "),t("code",[s._v("afterEach")]),s._v(" 。")]),s._v(" "),t("h2",{attrs:{id:"完整的导航解析流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析流程"}},[s._v("#")]),s._v(" 完整的导航解析流程 "),t("Badge",{attrs:{text:"v4"}})],1),s._v(" "),t("ul",[t("li",[s._v("导航被触发。")]),s._v(" "),t("li",[s._v("在失活的组件里调用 beforeRouteLeave 守卫。")]),s._v(" "),t("li",[s._v("调用全局的 beforeEach 守卫。")]),s._v(" "),t("li",[s._v("在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。")]),s._v(" "),t("li",[s._v("在路由配置里调用 beforeEnter。")]),s._v(" "),t("li",[s._v("解析异步路由组件。")]),s._v(" "),t("li",[s._v("在被激活的组件里调用 beforeRouteEnter。")]),s._v(" "),t("li",[s._v("调用全局的 beforeResolve 守卫(2.5+)。")]),s._v(" "),t("li",[s._v("导航被确认。")]),s._v(" "),t("li",[s._v("调用全局的 afterEach 钩子。")]),s._v(" "),t("li",[s._v("触发 DOM 更新。")]),s._v(" "),t("li",[s._v("调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。")])]),s._v(" "),t("p",[s._v("下文，我们将从以下方面深入理解 vue-router 及其原理。可和最新的 "),t("RouterLink",{attrs:{to:"/vue/vue3/vue-router4.html"}},[s._v("VueRouter4 源码解析")]),s._v(" 结合理解.")],1),s._v(" "),t("p",[t("a",{attrs:{href:"./plugin"}},[s._v("vue插件机制")])]),s._v(" "),t("p",[t("a",{attrs:{href:"./initialization"}},[s._v("初始化及降级处理")])]),s._v(" "),t("p",[t("a",{attrs:{href:"./transitions"}},[s._v("路由过渡与视图渲染")])]),s._v(" "),t("p",[t("a",{attrs:{href:"./match"}},[s._v("路由匹配")])]),s._v(" "),t("p",[t("a",{attrs:{href:"./scroll"}},[s._v("滚动行为")])])])}),[],!1,null,null,null);t.default=e.exports}}]);