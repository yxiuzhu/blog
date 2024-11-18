(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{369:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"icestack-架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icestack-架构设计"}},[t._v("#")]),t._v(" iceStack 架构设计")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ice-lab/icestark",target:"_blank",rel:"noopener noreferrer"}},[t._v("icestark"),s("OutboundLink")],1),t._v(" 是一个面向大型系统的微前端解决方案，适用于以下业务场景：")]),t._v(" "),s("ul",[s("li",[t._v("后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内")]),t._v(" "),s("li",[t._v("单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高")]),t._v(" "),s("li",[t._v("系统有二方/三方接入的需求")])]),t._v(" "),s("p",[t._v("icestark 在保证一个系统的操作体验基础上，实现各个微应用的独立开发和发版，主应用通过 icestark 管理微应用的注册和渲染，将整个系统彻底解耦。")]),t._v(" "),s("p",[t._v("微前端 icestark 主要会根据路由变化对应用进行分发，包括应用生命周期管理、应用加载，通信、隔离，还有沙箱运行。框架应用去接入微前端的时候不用关心微应用相关的处理，核心只需要完成微应用的配置。框架应用里面处理微应用配置之外可能还会涉及到一些鉴权的逻辑或者应用埋点逻辑等业务上的实践方案。")]),t._v(" "),s("h2",{attrs:{id:"设计理念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[t._v("#")]),t._v(" 设计理念")]),t._v(" "),s("ul",[s("li",[t._v("技术栈无关")]),t._v(" "),s("li",[t._v("中心化路由")]),t._v(" "),s("li",[t._v("开发体验一致")]),t._v(" "),s("li",[t._v("独立开发与部署")])]),t._v(" "),s("h4",{attrs:{id:"技术栈无关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术栈无关"}},[t._v("#")]),t._v(" 技术栈无关")]),t._v(" "),s("p",[t._v("一个微应用接入的时候我们并不关心它的技术栈是什么样的，不论是使用 React 还是 Vue，或者 Angular，甚至说它是一个上古的代码（jQuery），应用都能够被接入。 但为什么在实践上又推荐单一技术体系的技术栈统一呢？看上去是两个相悖的概念，但实际上我们的思考是微前端能够通过技术栈无关的能力，将一些独立的系统或者应用，都集成在一个系统中。在集成的过程中，更多的希望它能够去做一些技术上的统一，而不是不去做任何管控，让它野蛮生长。所以在微前端架构具体实践过程中，我们秉持的理念就是在单一地体系下，需要技术上的统一，即便当下基于成本考虑不去迁移，长远来看肯定是逐步收敛技术体系。")]),t._v(" "),s("h4",{attrs:{id:"中性化路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中性化路由"}},[t._v("#")]),t._v(" 中性化路由")]),t._v(" "),s("p",[t._v("微前端方案中核心的一个能力 - 路由能力，在 icestark 当中，路由其实是一个中心化的管理，所有的路由信息都是在框架应用中维护，根据路由的变化去做路由的分发和管理。")]),t._v(" "),s("h4",{attrs:{id:"开发体验一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发体验一致"}},[t._v("#")]),t._v(" 开发体验一致")]),t._v(" "),s("p",[t._v("技术架构上引入一套微前端方案，并不会意味着要有很多新概念去学习，包括新的语法、构建逻辑，甚至整体的编码方式都发生变化，这是我们不期望看到的。所以在设计的时候，核心的一个命题就是低成本甚至零成本的迁移，开发者不需要额外去学习一些新的概念和流程，保持跟原先的开发逻辑一致。")]),t._v(" "),s("h4",{attrs:{id:"独立开发与部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#独立开发与部署"}},[t._v("#")]),t._v(" 独立开发与部署")]),t._v(" "),s("p",[t._v("在一定程度上会反映出上面提到的开发体验一致问题。之前的应用是独立开发、独立部署的，现在依旧保持原样，和微前端架构接入之前没有变化。")]),t._v(" "),s("h2",{attrs:{id:"设计原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[t._v("#")]),t._v(" 设计原理")]),t._v(" "),s("h3",{attrs:{id:"入口规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口规范"}},[t._v("#")]),t._v(" 入口规范")]),t._v(" "),s("p",[t._v("icestark 通过微应用入口字段的配置进行应用的渲染，因此这个字段 "),s("strong",[t._v("非常重要")]),t._v("。针对不同的场景，icestark 也支持了多种入口配置形式。")]),t._v(" "),s("p",[s("strong",[t._v("url")])]),t._v(" "),s("ul",[s("li",[t._v("适用于微应用入口资源比较确定，此时将这些资源地址按顺序拼成数组传给 icestark 即可。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/a.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/a.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("entry")])]),t._v(" "),s("ul",[s("li",[t._v("应用依赖的入口资源不确定：比如需要引入 vendor、或者不确定的 externals 资源、资源地址带 hash 等场景")]),t._v(" "),s("li",[t._v("应用默认需要依赖很多 DOM 节点：比如 "),s("code",[t._v("jQuery")]),t._v("/"),s("code",[t._v("Kissy")]),t._v("/"),s("code",[t._v("Angular")]),t._v(" 等框架")]),t._v(" "),s("li",[t._v("支持直接解析 html 能简化兼容旧技术栈的成本，同时进一步简化 url 的配置成本。")]),t._v(" "),s("li",[t._v("entry 对应 "),s("code",[t._v("html url")]),t._v(", icestark 对 "),s("code",[t._v("entry")]),t._v(" 的处理包含以下步骤：\n"),s("ul",[s("li",[t._v("通过 "),s("code",[t._v("window.fetch")]),t._v(" 获取 entry 属性对应的 html 内容")]),t._v(" "),s("li",[t._v("解析 html 内容，框架将会进行解析处理：提取 js 信息，如果资源路径为相对地址，将根据 entry 地址进行补齐")]),t._v(" "),s("li",[t._v("将处理后的 html 内容插入 icestark 动态创建的节点")]),t._v(" "),s("li",[t._v("依次通过创建 "),s("code",[t._v("script")]),t._v(" 标签按顺序引入 js 资源")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/a.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("entryContent")])]),t._v(" "),s("ul",[s("li",[t._v("当需要使用 entry 能力但是 "),s("strong",[s("code",[t._v("html url")]),t._v(" 不支持前端跨域访问")]),t._v("的情况，可以自行将 html 内容拿到，然后通过 entryContent 属性传递给 icestark。entryContent 对应的 htmlContent，也是类似的处理逻辑，仅仅去掉了主动 fetch 的过程。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryContent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<!DOCTYPE html><html><body><script src=\"\"></body></html>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("render")]),t._v("/"),s("strong",[t._v("component")])]),t._v(" "),s("ul",[s("li",[t._v("组件直出，仅使用 React 的主应用支持，简化框架应用层子应用和子页面的配置成本。")])]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/App.jsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AppRoute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ice/stark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BasicLayout "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/layouts/BasicLayout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicLayout")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRouter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoute")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("商家平台"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//unpkg.com/icestark-child-seller/build/js/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//unpkg.com/icestark-child-seller/build/css/index.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoute")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRouter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BasicLayout")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h3",{attrs:{id:"路由匹配与劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由匹配与劫持"}},[t._v("#")]),t._v(" 路由匹配与劫持")]),t._v(" "),s("p",[t._v("路由劫持是微前端方案中比较重要的一块能力，如果不去劫持应用的路由，就无法判定当前需要加载哪一个应用资源，也无法决定渲染什么界面。当我们访问到框架应用页面时，icestark 内部会去做一个路由的分发。")]),t._v(" "),s("h4",{attrs:{id:"兜底路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兜底路由"}},[t._v("#")]),t._v(" 兜底路由")]),t._v(" "),s("p",[t._v("如果在微应用架构里面去设置了 path 为 "),s("code",[t._v("/")]),t._v(" 的一个微应用，那它将整个系统的一个兜底路由，所有不匹配已注册的路由配置都会由兜底路由进行渲染。\n兜底路由一般情况都会用来渲染通用页面，比如跟框架应用有比较强的耦合页面，比如登陆页面， 404 页面或者说退出登录的页面。所以实践上面我们也将兜底路由作为框架应用自身路由的渲染。")]),t._v(" "),s("h4",{attrs:{id:"路由劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由劫持"}},[t._v("#")]),t._v(" 路由劫持")]),t._v(" "),s("p",[t._v("为了能够让 icestark 响应页面路由的变化，并对相应的微应用进行加载，icestark 对两类路由事件进行了劫持：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("history API")]),t._v(" 中的 "),s("code",[t._v("popstate")]),t._v(" 和 "),s("code",[t._v("hashChange")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("window")]),t._v(" 上的路由事件 "),s("code",[t._v("pushState")]),t._v(" 和 "),s("code",[t._v("replaceState")]),t._v("（通常在浏览器上进行前进后退操作的时候会触发）。")])])]),t._v(" "),s("p",[t._v("为什么能够完成这样的路由分发操作？通过一个 url 的变化，内部究竟是怎么劫持处理的，如何判断出需要加载的是注册的哪个应用？这个就涉及到我们的"),s("strong",[t._v("路由劫持原理")]),t._v("：")]),t._v(" "),s("p",[t._v("icestark 对两类路由事件进行了劫持，一类为 history API 中的 "),s("code",[t._v("popstate")]),t._v(" 和 "),s("code",[t._v("hashChange")]),t._v("，另一类是 window 上的路由事件 "),s("code",[t._v("pushState")]),t._v(" 和 "),s("code",[t._v("replaceState")]),t._v("，这两个事件在浏览器上进行前进后退操作的时候会触发。一旦应用间发生跳转，通过上述事件的劫持能够拿到对应的路由信息，再根据路由的匹配来决定哪个微应用进行挂载。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("应用内跳转：一个微应用可能会有多个路由设置，如果在没有发生应用间跳转的情况下，由于匹配到的是当前的微应用，所以"),s("strong",[t._v("不会再次加载资源")]),t._v("，内部路由跳转逻辑则根据微应用自身路由配置决定渲染。")])]),t._v(" "),s("li",[s("p",[t._v("应用间跳转：如果整个框架应用的微应用配置发生卸载，这个时候将会"),s("strong",[t._v("将劫持的内容都会给移除，恢复到原始状态")]),t._v("，这样就完成了整个应用从路由基础到 url 变化监听再到微应用加载的一个过程。")])])]),t._v(" "),s("h3",{attrs:{id:"微应用加载渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微应用加载渲染"}},[t._v("#")]),t._v(" 微应用加载渲染")]),t._v(" "),s("p",[t._v("通常来讲，我们在做一个 SPA 应用的时候是不需要关心其加载、卸载的时机的。因为应用资源加载完肯定会加载，而在应用卸载时，要么是整个应用跳转了，要么就是整个浏览器都关掉了。")]),t._v(" "),s("p",[t._v("但是在微前端的架构里面，就需要知道微应用的卸载逻辑，单单从 React 这个场景来说，如果不去定义它的卸逻辑载，在微应用切换的时候，很可能有很多的循环执行的事件、组件 unmount 卸载生命周期的函数都无法触发，这会给其他应用的执行带来一些副作用。")]),t._v(" "),s("p",[t._v("所以除了核心的渲染逻辑之外，还要关心微应用的卸载逻辑。注册的生命周期会跟资源加载的逻辑配合，最终去完成微应用的渲染或切换。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/architecture/micro6.png",alt:"micro6"}})]),t._v(" "),s("p",[t._v("微应用在加载的时候，中间会去做一层资源缓存判断，如果资源没有缓存，icestark 会根据它注册到框架应用的配置信息进行资源分析。一般情况下资源会有两种配置方式：")]),t._v(" "),s("ul",[s("li",[t._v("一种是 "),s("code",[t._v("url")]),t._v(" 方式，里面可能包括 JS 资源、CSS 资源")]),t._v(" "),s("li",[t._v("另一种是 "),s("code",[t._v("html entry")]),t._v(" 的方式， "),s("code",[t._v("html")]),t._v(" 方式涉及到的资源会更多。可能会有独立的 JS、独立的CSS，甚至会有一些内联的 script 标签和 style 标签。完成资源加载后，icestark 会将这些资源插入到框架应用中。")])]),t._v(" "),s("p",[t._v("在资源标签插入之前会对应用的资源进行标识，因为微应用切换的时候需要知道应用关联了哪些资源，通过资源标识能够正确找到对应的资源信息。标识完之后，最终走到应用的挂载流程，也就是执行注册的 registerAppEnter 生命周期中的逻辑。 应用卸载相对来说就会比较简单。根据应用的资源标识找到所有需要卸载的资源。并执行 registerAppLeave 生命周期中注册的函数，这样就完成了整个微应用的卸载。")]),t._v(" "),s("p",[t._v("另外微应用资源加载过程中有一个资源缓存的判断，在一些业务场景下面，会遇到一些低端性能的场景，如果每一次都去重新加载资源进行执行，这对浏览器的性能会造成很大的负担。")]),t._v(" "),s("p",[t._v("所以我们中间加了一个资源缓存的过程。让已加载的资源和已执行的逻辑保存在内存，每次进入已缓存的微应用的时候，立即去执行缓存的微应用挂载函数，免去了资源加载和执行的过程。 但是这个过程中会一个问题，如果说微应用的资源不卸载，那其实会造成资源污染，包括 CSS 的污染跟 JS 的污染。所以这块能力的主动权交给了开发者，如果需要将微应用进行缓存，那就需要正确的评估其他接入微应用，是否会被污染。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/architecture/micro11.png",alt:"micro11"}})]),t._v(" "),s("p",[t._v("如何将子应用的 bundle 渲染到指定节点？")]),t._v(" "),s("p",[t._v("框架应用有系统的 Layout，我们需要将子应用渲染到 Layout 里面，但是单页面应用都是直接通过 "),s("code",[t._v("ReactDOM.render(<App />, document.getElementById('#root'))")]),t._v(" 的方式渲染，如果直接执行那么渲染的位置是无法被控制的，于是 icestark 为子应用提供了一个 "),s("code",[t._v("getMountNode()")]),t._v(" 的 API 保证子应用能够渲染到指定的节点里。")]),t._v(" "),s("p",[t._v("如何加载 Vite 应用？")]),t._v(" "),s("p",[t._v("Vite 会默认打包出符合标准的 ES modules 的脚本资源。然而，在 icestark 中需要依赖微应用导出 生命周期函数 来渲染微应用。使用 "),s("code",[t._v("<script>")]),t._v(" 标签加载 ES modules 脚本的一个难题在于无法获取微应用导出的生命周期函数。基于这个考虑，实际实现中是通过 Dynamic Import 来加载脚本：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了兼容旧版浏览器，通过 new Function() 将其包裹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dynamicImport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'return import(url)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unmount "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dynamicImport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("如上 icestark 应用加载流程图，除了能支持 "),s("code",[t._v("IIFE / UMD")]),t._v(" 规范的微应用之外，icestark 支持了 "),s("code",[t._v("ES modules")]),t._v(" 规范的应用加载，并通过 "),s("code",[t._v("import")]),t._v(" 类型标识。")]),t._v(" "),s("h3",{attrs:{id:"应用间通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用间通信"}},[t._v("#")]),t._v(" 应用间通信")]),t._v(" "),s("p",[t._v("框架应用跟微应用之间，或者说是微应用跟微应用之间，是不是能够去做一些通信或者做一些事件监听？")]),t._v(" "),s("p",[t._v("其实从微前端的设计原则上来说，我们并不希望为微应用太多地去依赖框架应用或者其它微应用提供的能力。之前遇到有一些场景，有些开发者希望把一些很重的逻辑，比如通用的 utils 逻辑，通过应用间的通信方式，实现不同应用间的函数共享。技术上是行得通的，但这样的设计会对应用的维护性造成很大影响。")]),t._v(" "),s("p",[t._v("icestark 提供了一个应用通信机制，在实际开发过程中推荐应该更加轻量的去使用。比如说这通信机制仅仅让框架应用和微应用的多语言设置保持一致，多语言设置发生切换时，微应用能够监听到这个变化。另外一个就是应用间的事件通信，大部分场景是微应用系统通知框架应用去主动获取数据。基于这样的场景，我们可以利用应用通信的能力，来完成一些轻量的通知。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/architecture/micro7.png",alt:"micro7"}})]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("@ice/stark-data")]),t._v(" 这个包可以很简单的实现应用间通信，比如全局切换语言微应用响应的场景。"),s("code",[t._v("@ice/stark-data")]),t._v(" 支持状态共享和事件监听响应两种方式。核心其实是一个 "),s("code",[t._v("EventBus")]),t._v(" 的机制，框架应用跟微应用之间的通讯，以 "),s("code",[t._v("window")]),t._v(" 这样一个全局变量作为桥梁。这样不管是微应用添加的事件或数据，还是框架应用添加的事件或数据都可以访问到。核心只有两个 API：store(全局变量管理中心) 和 event（全局事件管理中心）。")]),t._v(" "),s("p",[t._v("对于主应用和微应用，运行时都共享了当前页面的 location、Cookie、LocalStorage、window 等全局信息，因此应用间的通信，也可以通过这些方案很简单的实现。")]),t._v(" "),s("ul",[s("li",[t._v("子应用页面切换参数流转")]),t._v(" "),s("li",[t._v("中英文切换，切换按钮在框架应用，监听事件在子应用")]),t._v(" "),s("li",[t._v("登录信息前端互通，子应用确认框架应用登录后，前端不再重复发起登录请求相关逻辑；登录用户信息保存在框架应用中，子应用获取用户数据")]),t._v(" "),s("li",[t._v("框架应用顶部有 ”消息“ 展示入口，子应用内有阅读消息的能力，阅读完消息后需要通知框架应用刷新“消息”展示信息")])]),t._v(" "),s("h3",{attrs:{id:"微前端隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端隔离"}},[t._v("#")]),t._v(" 微前端隔离")]),t._v(" "),s("p",[t._v("icestark 当下的方案里，无论是主应用还是微应用都是直接在页面里执行，本质上不存在隔离机制，针对这个问题我们一方面通过一些规范来保证污染问题，一方面也在尝试更加彻底的沙箱机制，如果你的微应用都是二方接入，那我们推荐直接通过规范约束即可，如果存在三方接入这种不可控的场景，建议还是通过 iframe 的方式嵌入。")]),t._v(" "),s("ul",[s("li",[t._v("大部分业务没有三方接入需求，支持非常彻底的沙箱机制没有太大意义，至少在我们目前落地的业务中还没有出现相互污染的问题")]),t._v(" "),s("li",[t._v("对于可控的二方应用接入，我们推荐进行一些规范约定即可，比如不要污染全局变量、定时器及时清除、CSS 样式尽量通过前缀或者 CSS Modules 做隔离")]),t._v(" "),s("li",[t._v("对于不可控的三方应用，建议暂时先通过 iframe 的方式接入")]),t._v(" "),s("li",[t._v("沙箱机制有机会通过 Shadow DOM 和 Web Worker 之类的方案解决")])]),t._v(" "),s("h4",{attrs:{id:"样式隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式隔离"}},[t._v("#")]),t._v(" 样式隔离")]),t._v(" "),s("p",[t._v("页面运行时同时只会存在一个微应用，因此多个微应用不存在样式相互污染的问题，但是主应用和微应用是同时运行的，因此这两者中间可能会存在一些样式相互污染，针对这个问题，我们目前推荐「通过约定避免微应用与主应用的样式相互污染」的方案，同时也在尝试 Shadow DOM 的方案。常见的样式隔离方案：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("使用 CSS Modules 方案管理样式")])]),t._v(" "),s("p",[t._v("无论是主应用还是微应用，直接通过 CSS Modules 的方案管理自身可控的样式，这样基本杜绝了两者样式冲突的问题。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("主应用自定义基础组件 prefix")]),t._v("：")]),t._v(" "),s("p",[t._v("除了自身可控的样式，应用中还会有一些全局样式，比较典型的就是类似 next 这种基础组件的样式，如果主应用和微应用使用了不同版本的 next，则很容易造成样式相互污染，这种场景推荐在主应用中将基础组件的前缀统一改掉，比如将 "),s("code",[t._v("next-")]),t._v(" 改为 "),s("code",[t._v("next-icestark-")]),t._v("，这个能力已在主应用模板中内置，具体可参考相关代码。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("微应用避免产生全局样式")])]),t._v(" "),s("p",[t._v("对于类似 "),s("code",[t._v("normalize.css")]),t._v(" 这种全局重置样式，推荐统一通过主应用引入，微应用尽量避免产生全局性质的样式，因为这样在切换微应用时可能会因为全局样式差异产生一些抖动。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Shadow DOM")])]),t._v(" "),s("p",[t._v("如果将微应用渲染到 Shadow DOM 中，那么微应用产生的所有样式都不会污染到全局，事实上在我们试验的过程中的确是这样的。")]),t._v(" "),s("p",[t._v("比如如果使用的基础依赖的组件库，并没有设计让 Dialog 等弹出层在指定的 dom 节点中插入结构的话，弹出层都是会逃离你当前的 shadow DOM。逃离之后，它就是一个无样式的弹框。这种无样式的弹框对于业务上来说是不可以接受的，因此弹框逻辑需要去做一些兼容，更甚至需要对底层组件去做改造。大部分类似 Dialog 组件的实现都是在 body 下创建一个容器节点，但是 Shadow DOM 里 Dialog 的样式无法作用到全局，因此展示出来 Dialog 就是无样式的，在这个问题上我们还在尝试，比如类似 Dialog 组件的实现能够进行优化：判断自身是否在 Shadow DOM 里，如果是的话则将容器节点创建到 Shadow DOM 里，否则创建到 body 节点下。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 React 场景下，shadow DOM 的使用会涉及到事件机制的问题，因为React 的事件机制是代理到 document 的，但基于 shadow DOM 处理的话，它可能会阻断事件到它的 host 层，也就是你渲染 shadow DOM 的那一层。虽然说社区也有对应的包去做一些兼容处理，但它对业务上来说还是会有一些实现成本。")])]),t._v(" "),s("li",[s("p",[t._v("除此之外还包括其它的问题。比如 CSS @font-face，或者说一些字体属性，svg 都会有一个不兼容的场景。")])])])])]),t._v(" "),s("p",[s("strong",[t._v("实际业务实践")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("业务代码中的样式隔离")]),t._v(" "),s("ul",[s("li",[t._v("推荐通过 "),s("code",[t._v("CSS Module")]),t._v(" 的方式，能够自动生成 "),s("code",[t._v("hash")]),t._v(" 后缀的样式名，基于每个不同的应用构建出来的样式，在天然上就能够做到隔离。")])])]),t._v(" "),s("li",[s("p",[t._v("基础组件样式隔离")]),t._v(" "),s("ul",[s("li",[t._v("基础组件能够支持 "),s("code",[t._v("CSS prefix")]),t._v(" 的方式，可以为所有样式添加一个前缀，在实践过程中将框架应用的前缀和微应用前缀进行区分，来完成样式的隔离。如果有不支持 "),s("code",[t._v("CSS prefix")]),t._v(" 的样式，我们也能够借助社区 "),s("code",[t._v("PostCSS")]),t._v(" 的能力给组件样式加上 "),s("code",[t._v("namespace")]),t._v("，框架应用跟微应用通过不同的 "),s("code",[t._v("namespace")]),t._v(" 进行样式隔离。")])])])]),t._v(" "),s("h4",{attrs:{id:"脚本隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本隔离"}},[t._v("#")]),t._v(" 脚本隔离")]),t._v(" "),s("p",[t._v("相对于样式污染，JS 污染的危害性更高，在目前的方案下，如果微应用想要恶意污染的话基本是无法杜绝的，因此针对这种不可控的微应用建议还是通过 iframe 的方式接入。针对可控的二方应用，正常书写代码是不会有问题的，针对一些特殊情况通过一些规范规避。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("微应用避免改变全局状态")])]),t._v(" "),s("p",[t._v("比如改变全局变量 window/location 的默认行为，通过 document 操作 Layout 的 DOM，这些本身都是一些不推荐的做法。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("主应用通过钩子记录并恢复全局状态")])])])]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRouter")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onAppEnter")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("appConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需记录全局状态")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onAppLeave")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("appConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需恢复全局状态")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  // {...}\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRouter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("多个应用的 bundle 多次执行的时候很容易"),s("strong",[t._v("对全局变量造成污染")]),t._v("，icestark 中通过 "),s("code",[t._v("proxy")]),t._v(" 的沙箱机制实现了脚本的隔离。")]),t._v(" "),s("p",[t._v("Prxoy 沙箱的基本原理是通过 "),s("code",[t._v("with + new Function")]),t._v(" 的形式阻断代码中对于 "),s("code",[t._v("window")]),t._v(" 的直接访问，并通过 Proxy 的方式拦截对于 "),s("code",[t._v("window")]),t._v(" 变量的访问和写入，"),s("strong",[t._v("沙箱的隔离使代码不能直接访问到 "),s("code",[t._v("window")]),t._v(" 对象")]),t._v("，通过 ES6 的新特性 Proxy 可以定制 get/set 的逻辑，这样就能"),s("strong",[t._v("对 window 上的一些全局变量变化进行快照记录，以便微应用切换的时候进行恢复")]),t._v("。")]),t._v(" "),s("p",[t._v("另外像一些应用初始化时，会在 "),s("code",[t._v("window")]),t._v(" 上面设置 "),s("code",[t._v("setTimeout")]),t._v("、"),s("code",[t._v("setInterval")]),t._v("，如果在卸载阶段没有很好的处理，将会影响到下一个挂载微应用的执行。所以在沙箱中针对这类方法进行了特殊处理，在沙箱挂载前对相应的方法进行劫持，在卸载的时候，再对它进行恢复。")]),t._v(" "),s("h4",{attrs:{id:"三方隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三方隔离"}},[t._v("#")]),t._v(" 三方隔离")]),t._v(" "),s("p",[t._v("对于不授信的三方最简单最安全的隔离方式其实是 iframe。在 icestark 中可以简单定义好基准路由 "),s("code",[t._v("path")]),t._v(" ，再通过自定义渲染的方法 "),s("code",[t._v("render")]),t._v(" 将 iframe 相关的内容渲染出来。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/architecture/micro8.png",alt:"micro8"}})]),t._v(" "),s("h3",{attrs:{id:"微模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微模块"}},[t._v("#")]),t._v(" 微模块")]),t._v(" "),s("p",[t._v("微应用的更小粒度，通常是一个模块或页面，跟页面路由无关，可以随处挂载，也会出现多个"),s("a",{attrs:{href:"https://icestark.gitee.io/docs/guide/micro-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("微模块"),s("OutboundLink")],1),t._v("同时渲染运行。")]),t._v(" "),s("p",[t._v("上面提到的一些技术方案、技术架构，以及解决思路，更多的是以加载一个微应用的方式，它的核心解的问题，就是把单个的 SPA 应用去接入框架应用中。那微模块又是怎么样的场景？下面是微模块的 3 大应用场景：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("多模块共存")])]),t._v(" "),s("p",[t._v("实现一个多 tab 方案。在原有已加载的微应用基础上，新开一个 tab 页面，里面的内容又是独立的 bundle 资源渲染出来的。")]),t._v(" "),s("p",[t._v("比如多页签的场景，其交互的特点决定了同一路由下存在的多个独立功能模块的诉求。如果每个 Tab 页签下都是一个子应用，并且包含对路由的响应，那意味着一旦路由变化，页签下面的子应用状态将变得不可掌控。而通过微模块的方案，可以便捷地实现多个应用共存，就像是渲染一个独立组件一样控制渲染应用。在结合研发框架的体系下，icestark 也可以便捷地利用 Static Router 的特性，将一个 SPA 应用作为一个独立模块进行渲染，从而大大降低业务上落地的难度。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("模块组合搭建")])]),t._v(" "),s("p",[t._v("一个页面里面会有信息模块，表单模块，以及列表模块。在一些对外输出复用的场景中，如果直接接入整个页面，其通用性并不是特别强，但如果各个模块能够进行自由组合，就可以按需组合出不同需求的页面。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("动态渲染模块")])]),t._v(" "),s("p",[t._v("页面的内容由接口返回的数据决定。数据中会给出需要渲染的模块内容，比如无线的搭建场景，其实也是一个微模块的应用场景。")])])]),t._v(" "),s("p",[t._v("将已有项目改造为微模块的方式与 "),s("a",{attrs:{href:"https://icestark.gitee.io/docs/guide/use-child/react",target:"_blank",rel:"noopener noreferrer"}},[t._v("微应用"),s("OutboundLink")],1),t._v(" 类似，主要包含两步：")]),t._v(" "),s("ol",[s("li",[t._v("应用入口导出生命周期函数")]),t._v(" "),s("li",[t._v("将模块构建为 UMD 产物")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/architecture/micro9.png",alt:"micro9"}})]),t._v(" "),s("p",[t._v("icestark 对于微模块的应用场景上会有一个明确的定义，微模块其实是不会再去耦合路由的。之前提到的微应用的内部基本上是一个 SPA 它至少有一个路由或者是一个页面，但是微模块的使用上我们希望尽量简单，因为一旦多个模块都大量耦合路由的话，这会使路由处理变得复杂。")]),t._v(" "),s("p",[t._v("在模块的标准上面，微模块是以 UMD 的方式直接打包，通过这种标准模式打包，即便是以 npm 包的形式也可以正常使用。在微模块内部除了默认导出模块方法外，还需要定义挂载（mount）和卸载（unmount）的生命周期。")]),t._v(" "),s("p",[t._v("微模块的应用场景其实是对微应用的一个补充，它更适用于更加细粒度的功能拆分和动态搭建的场景。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://icestark.gitee.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("icestark"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904202389438478#heading-26",target:"_blank",rel:"noopener noreferrer"}},[t._v("淘宝大型应用架构中的微前端方案"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/TAXP7ipDdtb2Jb-L3QHszA",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何设计微前端中的主子路由调度"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7155436877573537806",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端icestark源码解读"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);