# CSS 知识清单

## 选择器及优先级

[CSS选择器有哪些？优先级？哪些属性可以继承？](https://mp.weixin.qq.com/s/hCaRwKswMVdK8ZrYfqcTcA)

[探究 CSS 选择器性能真相](7199832444835659837)

[再次认识 CSS 优先级](https://juejin.cn/post/7200685976526815291#heading-18)

## BFC

[了解 BFC、IFC、GFC 和 FFC](https://juejin.cn/post/7072174649735381029)

## 水平与垂直居中

[元素水平垂直居中的方法有哪些？如果元素不定宽高呢？](https://mp.weixin.qq.com/s/r17roT-aEdElmmgNeg7qdg)

[实现元素水平垂直居中的 N 种方式](https://github.com/sisterAn/blog/issues/119)

#### 水平居中

行内元素，给其父元素设置text-align:center
定宽块级元素，该元素设置margin:0 auto
定宽块级元素，还可以用绝对定位设置和left:50%;加margin-left:-1/2宽度；
不定宽块级元素，设置父元素为flex布局，子元素设置margin:0 auto即可
不定宽块级元素，设置父元素为flex布局，且设置justify-content: center;
不定宽块级元素，设置父元素为position: relative;子元素position: absulote;left: 50%;transform: translateX(-50%);

#### 垂直居中

若元素是单行文本, 则可设置line-height等于父元素高度
定高块级元素，该元素设置margin:auto 0
定高块级元素，可以用绝对定位+top:50%;+margin-top
不定高块级元素，设置父元素为flex布局，子元素设置margin: auto 0即可
不定高块级元素，设置父元素为flex布局，且设置align-items: center;
不定高块级元素，可以用绝对定位和transform
不定高块级元素，设置父元素为table布局，子元素display: table-cell;vertical-align:middle;

#### 水平垂直居中

子元素为块级元素，父元素flex布局，子元素设置margin:auto;
子元素未知，父元素flex布局，设置justify-content: center;align-items: center;
子元素用绝对定位，设置上下左右为0，margin:auto;父元素position: relative;
子元素已知宽高，绝对定位 left: 50%;top: 50%;  再 margin 自己的负一半；或者 transform: translate(-50%,-50%);

## 布局与响应式

[如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？](https://mp.weixin.qq.com/s/aKHUQUAKkcrXzDgIkJliUg)

[Flex弹性盒布局](https://mp.weixin.qq.com/s/OORqq5uK8jgjDV2Hkx0baA)

[Grid网格布局](https://mp.weixin.qq.com/s/5rs7f7SCclJnG88Veb-P9g)

[响应式设计](https://mp.weixin.qq.com/s/5N5ZMIzACWj08mrZAa7fKg)

#### 双栏布局

左固定右适应：

- float + margin
- float + margin 偏移
- float + overflow(BFC)
- table
- 绝对定位
- flex
- grid

左适应右固定:

- float + margin
- table
- flex
- grid

#### 三栏布局

两侧栏固定宽度，中间栏自适应

- float
- 绝对定位
- 表格布局
- 弹性布局
- 网格布局
- 圣杯布局
- 双飞翼布局

## 伪类与伪元素

[总结伪类与伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)

[css 伪类与伪元素区别](https://github.com/lgwebdream/FE-Interview/issues/18)

## CSS 隐藏页面元素

[CSS中，有哪些方式可以隐藏页面元素？区别?](https://mp.weixin.qq.com/s/1tnP66WsEZHEDNcNV2srRA)

[在 CSS 中隐藏元素的 10 种方法](https://juejin.cn/post/7065871783232012318)

## CSS 画一个三角形

[CSS如何画一个三角形？原理是什么？](https://mp.weixin.qq.com/s/KtKFnuRtK-PDESrVeGclEw)

[纯 CSS 实现三角形的 3 种方式](https://juejin.cn/post/7075884138900750372)

#### 利用 border

```css
.triangle {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: transparent transparent #000 transparent;
}
```

#### 利用 clip-path 剪裁

[CSS clip-path 生成器](https://www.html.cn/tool/css-clip-path/)

```css
.triangle {
  width: 200px;
  height: 200px;
  background: #000;
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
}
```

## 支持小于12px 的文字方式

[让Chrome支持小于12px 的文字方式有哪些？区别？](https://mp.weixin.qq.com/s/4z3uYqqWV9IvJkXCXGrhvg)

## 视差滚动效果

[如何使用CSS完成视差滚动效果?](https://mp.weixin.qq.com/s/zidEa2l1cG7wgTCdxXgFvw)

## 回流与重绘

[怎么理解回流跟重绘？什么场景下会触发？](https://mp.weixin.qq.com/s/hLnFQmfScwK9bWwn6sMlmw)

## 获取页面元素的位置

[用Javascript获取页面元素的位置](http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html)

[各种高度clientHeight/scrollHeight/offsetHeight及应用](https://juejin.cn/post/6898575556796022797)

[元素 offset client scroll 相关属性简介](https://juejin.cn/post/6844903811463512077)

## Flex 布局和 Grid 布局?

[彻底理解CSS Flexbox布局](https://juejin.cn/post/7004622232378966046)

[图解 CSS Grid 布局](https://juejin.cn/post/7160485893810667534)

[Flex 布局和 Grid 布局怎么选](https://juejin.cn/post/7197279149337395260#heading-4)

## 主题切换方案

[前端主题切换方案](https://juejin.cn/post/7134594122391748615)

[深色模式在 Web 端的适配方案](https://juejin.cn/post/6862274734373994509)

## CSS 渲染优化

[关键渲染路径中的 CSS 解析和渲染](https://juejin.cn/post/6844903648833568776)

[用 content-visibility 提高渲染性能](https://juejin.cn/post/7168629736838463525#heading-13)

[仅使用CSS提高页面渲染速度](https://juejin.cn/post/6942661408181977118)

## 移动端适配

[超详细讲解H5移动端适配](https://juejin.cn/post/7085931616136069156)

[数据大屏适配方案](https://juejin.cn/post/7163932925955112996)

## CSS 动画

[CSS3常见动画有哪些？实现方式？](https://mp.weixin.qq.com/s/azcij-vOQ16XOUnaF83npA)

[requestAnimationFrame理解与实践](https://newbyvector.github.io/2018/05/01/2015-05-01/)

[你可能不知道的Animation动画技巧与细节](https://juejin.cn/post/6889226357851553805)

[浏览器动画帧渲染与执行机制探索](https://jelly.jd.com/article/5fda117df708c8014219e056)

[CSS3动画之逐帧动画](https://jelly.jd.com/article/6006b1035b6c6a01506c87a7)

[requestAnimationFrame，终结定时器动画时代！](https://juejin.cn/post/6844904126653202440)

[CSS 和 JS 动画底层原理及如何优化其性能](https://juejin.cn/post/6844903630483488782)

[前端也要懂物理 —— 惯性滚动篇](https://juejin.cn/post/6844904185121488910)

[animation、transition、transform、translate傻傻分不清](https://juejin.cn/post/6844903615920898056#heading-3)

[深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调](https://juejin.cn/post/6844904165462769678)

## canvas

[Canvas知识总结](https://juejin.cn/post/6948740584819392525)

[高质量前端快照方案：来自页面的「自拍」](https://juejin.cn/post/6844904019605848072#heading-12)

[可视化研发之线的画法：直线，曲线，动画（Canvas版）](https://juejin.cn/post/6939742079295848462)

[教你实现微信8.0『炸裂』的🎉表情特效](https://juejin.cn/post/6926010284578603021)

[详解 Canvas 路径动画](https://juejin.cn/post/6924866572972457992)

[一起聊聊canvas曲线那些事](https://jelly.jd.com/article/5fd321225fd2b30146b91a7f)
