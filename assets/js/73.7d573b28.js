(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{411:function(t,i,l){"use strict";l.r(i);var n=l(8),a=Object(n.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"ifc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ifc"}},[t._v("#")]),t._v(" IFC")]),t._v(" "),i("p",[t._v("IFC 的形成条件非常简单，块级元素中仅包含内联级别元素，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个 IFC。")]),t._v(" "),i("h2",{attrs:{id:"ifc-渲染规则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ifc-渲染规则"}},[t._v("#")]),t._v(" IFC 渲染规则")]),t._v(" "),i("ul",[i("li",[t._v("子元素在水平方向上一个接一个排列，在垂直方向上将以容器顶部开始向下排列")]),t._v(" "),i("li",[t._v("节点无法声明宽高，其中 margin 和 padding 在水平方向有效，在垂直方向无效")]),t._v(" "),i("li",[t._v("节点在垂直方向上以不同形式对齐")]),t._v(" "),i("li",[t._v("能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的线盒（line box）。线盒的宽度是由包含块（containing box）和与其中的浮动来决定")]),t._v(" "),i("li",[t._v("IFC 中的 line box 一般左右边贴紧其包含块，但 float 元素会优先排列。")]),t._v(" "),i("li",[t._v("IFC 中的 line box 高度由 line-height 计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同")]),t._v(" "),i("li",[t._v("当内联级盒子的总宽度少于包含它们的 line box 时，其水平渲染规则由 text-align 属性值来决定")]),t._v(" "),i("li",[t._v("当一个内联盒子超过父元素的宽度时，它会被分割成多盒子，这些盒子分布在多个 line box 中。如果子元素未设置强制换行的情况下，inline box 将不可被分割，将会溢出父元素。")])]),t._v(" "),i("h2",{attrs:{id:"ifc-应用场景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ifc-应用场景"}},[t._v("#")]),t._v(" IFC 应用场景")]),t._v(" "),i("ul",[i("li",[t._v("水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。")]),t._v(" "),i("li",[t._v("垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 "),i("code",[t._v("vertical-align: middle")]),t._v("，其他行内元素则可以在此父元素下垂直居中。")])]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://juejin.cn/post/6941206439624966152#heading-40",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.5 万字 CSS 基础拾遗（核心知识、常见需求）"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);i.default=a.exports}}]);