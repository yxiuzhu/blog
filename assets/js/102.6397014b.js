(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{440:function(t,e,a){"use strict";a.r(e);var n=a(8),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"打包性能分析工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包性能分析工具"}},[t._v("#")]),t._v(" 打包性能分析工具")]),t._v(" "),e("p",[t._v("Webpack 最大的优势在于它的功能非常强大、全面，加之繁荣活跃的组件生态，已经足够应对几乎所有 Web 构建需求，包括：SPA、MPA、SSR、桌面应用、Node 程序、WebAssemsbly、PWA、微前端等等，所以即使在近几年工程化领域异军突起、百花齐放的背景下，Webpack 也依然能保持老大哥的位置。")]),t._v(" "),e("p",[t._v("但软件世界没有银弹！Webpack 在大型项目中通常性能表现不佳，这一方面是因为 JavaScript 语言的单线程架构决定了 Webpack 的运算效率就不可能很高；另一方面则是因为在大型项目中，Webpack 通常需要借助许多组件（插件、Loader）完成大量的文件读写、代码编译操作。")]),t._v(" "),e("p",[t._v("幸运的是，站在开发者视角，我们有许多行之有效的性能优化方法，包括缓存、并发、优化文件处理步骤等，但在着手优化之前，有必要先简单了解一下 Webpack 打包的核心流程；了解哪些步骤比较耗时，可能会造成性能卡点；以及，如何借助一些可视化工具分析 Webpack 的编译性能。")]),t._v(" "),e("h2",{attrs:{id:"回顾构建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回顾构建流程"}},[t._v("#")]),t._v(" 回顾构建流程")]),t._v(" "),e("h3",{attrs:{id:"webpack-核心构建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-核心构建流程"}},[t._v("#")]),t._v(" Webpack 核心构建流程")]),t._v(" "),e("p",[t._v("Webpack 最最核心的功能，一是使用适当 Loader 将任意类型文件转译为 JavaScript 代码，例如将 CSS 代码转译为 JS 字符串，将多媒体文件转译为 Base64 代码等；二是将这些经过 Loader 处理的文件资源合并、打包成向下兼容的产物文件。")]),t._v(" "),e("p",[t._v("为了实现这些功能，Webpack 底层的工作流程大致可以总结为这么几个阶段：")]),t._v(" "),e("ol",[e("li",[t._v("初始化阶段：\n"),e("ul",[e("li",[e("strong",[t._v("初始化参数")]),t._v("：从配置文件、 配置对象、Shell 参数中读取，与默认配置结合得出最终的参数；")]),t._v(" "),e("li",[e("strong",[t._v("创建编译器对象")]),t._v("：用上一步得到的参数创建 Compiler 对象；")]),t._v(" "),e("li",[e("strong",[t._v("初始化编译环境")]),t._v("：包括注入内置插件、注册各种模块工厂、初始化 RuleSet 集合、加载配置的插件等；")]),t._v(" "),e("li",[e("strong",[t._v("开始编译")]),t._v("：执行 compiler 对象的 run 方法，创建 Compilation 对象；")]),t._v(" "),e("li",[e("strong",[t._v("确定入口")]),t._v("：根据配置中的 "),e("code",[t._v("entry")]),t._v(" 找出所有的入口文件，调用 "),e("code",[t._v("compilation.addEntry")]),t._v(" 将入口文件转换为 "),e("code",[t._v("dependence")]),t._v(" 对象。")])])]),t._v(" "),e("li",[t._v("构建阶段：\n"),e("ul",[e("li",[e("strong",[t._v("编译模块(make)")]),t._v("：从 "),e("code",[t._v("entry")]),t._v(" 文件开始，调用 "),e("code",[t._v("loader")]),t._v(" 将模块转译为标准 JS 内容，调用 JS 解析器将内容转换为 AST 对象，从中找出该模块依赖的模块，再 "),e("strong",[t._v("递归")]),t._v(" 处理这些依赖模块，直到所有入口依赖的文件都经过了本步骤的处理；")]),t._v(" "),e("li",[e("strong",[t._v("完成模块编译")]),t._v("：上一步递归处理所有能触达到的模块后，得到了每个模块被翻译后的内容以及它们之间的"),e("code",[t._v("依赖关系图")]),t._v("。")])])]),t._v(" "),e("li",[t._v("封装阶段：\n"),e("ul",[e("li",[e("strong",[t._v("合并(*"),e("em",[t._v("**seal**")]),t._v("*)")]),t._v("：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 "),e("code",[t._v("Chunk")]),t._v("；")]),t._v(" "),e("li",[e("strong",[t._v("优化(optimization)")]),t._v("：对上述 "),e("code",[t._v("Chunk")]),t._v(" 施加一系列优化操作，包括：tree-shaking、terser、scope-hoisting、压缩、Code Split 等；")]),t._v(" "),e("li",[e("strong",[t._v("写入文件系统(emitAssets)")]),t._v("：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])])])]),t._v(" "),e("p",[t._v("在这个过程中有不少可能造成性能问题的地方：")]),t._v(" "),e("ul",[e("li",[t._v("构建阶段：\n"),e("ul",[e("li",[t._v("首先需要将文件的相对引用路径转换为绝对路径，这个过程可能涉及多次 IO 操作，执行效率取决于 "),e("strong",[t._v("文件层次深度")]),t._v("；")]),t._v(" "),e("li",[t._v("找到具体文件后，需要读入文件内容并调用 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fwebpack%2Floader-runner%2Fblob%2FHEAD%2Flib%2FLoaderRunner.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader-runner"),e("OutboundLink")],1),t._v(" 遍历 Loader 数组完成内容转译，这个过程需要执行较密集的 CPU 操作，执行效率取决于 "),e("strong",[t._v("Loader 的数量与复杂度")]),t._v("；")]),t._v(" "),e("li",[t._v("需要将模块内容解析为 AST 结构，并遍历 AST 找出模块的依赖资源，这个过程同样需要较密集的 CPU 操作，执行效率取决于 "),e("strong",[t._v("代码复杂度")]),t._v("；")]),t._v(" "),e("li",[t._v("递归处理依赖资源，执行效率取决于 "),e("strong",[t._v("模块数量")]),t._v("。")])])]),t._v(" "),e("li",[t._v("封装阶段：\n"),e("ul",[e("li",[t._v("根据 "),e("code",[t._v("splitChunks")]),t._v(" 配置、"),e("code",[t._v("entry")]),t._v(" 配置、动态模块引用语句等，确定模块与 Chunk 的映射关系，其中 "),e("code",[t._v("splitChunks")]),t._v(" 相关的分包算法非常复杂，涉及大量 CPU 计算；")]),t._v(" "),e("li",[t._v("根据 "),e("code",[t._v("optimization")]),t._v(" 配置执行一系列产物优化操作，特别是 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebpack-contrib%2Fterser-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terser"),e("OutboundLink")],1),t._v(" 插件需要执行大量 AST 相关的运算，执行效率取决于 "),e("strong",[t._v("产物代码量")]),t._v("；")])])]),t._v(" "),e("li",[t._v("等等。")])]),t._v(" "),e("p",[t._v("可以看出，Webpack 需要执行非常密集的 IO 与 CPU 操作，计算成本高，再加上 Webpack 以及大多数组件都使用 JavaScript 编写，无法充分利用多核 CPU 能力，所以在中大型项性能通常表现较差。")]),t._v(" "),e("h2",{attrs:{id:"性能分析工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能分析工具"}},[t._v("#")]),t._v(" 性能分析工具")]),t._v(" "),e("p",[t._v("有许多被反复实践、行之有效的构建性能优化手段，包括并行编译、缓存、缩小资源搜索范围等等，但在介绍这些具体的优化方法之前，有必要先聊聊：如何收集、分析 Webpack 打包过程的性能数据。")]),t._v(" "),e("p",[t._v("收集数据的方法很简单 —— Webpack 内置了 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.js.org%2Fapi%2Fstats%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("stats"),e("OutboundLink")],1),t._v(" 接口，专门用于统计模块构建耗时、模块依赖关系等信息。"),e("code",[t._v("stats")]),t._v(" 对象收集了 Webpack 运行过程中许多值得关注的信息，包括：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("modules")]),t._v("：本次打包处理的所有模块列表，内容包含模块的大小、所属 "),e("code",[t._v("chunk")]),t._v("、构建原因、依赖模块等，特别是 "),e("code",[t._v("modules.profile")]),t._v(" 属性，包含了构建该模块时，解析路径、编译、打包、子模块打包等各个环节所花费的时间，非常有用；")]),t._v(" "),e("li",[e("code",[t._v("chunks")]),t._v("：构建过程生成的 "),e("code",[t._v("chunks")]),t._v(" 列表，数组内容包含 "),e("code",[t._v("chunk")]),t._v(" 名称、大小、包含了哪些模块等；")]),t._v(" "),e("li",[e("code",[t._v("assets")]),t._v("：编译后最终输出的产物列表、文件路径、文件大小等；")]),t._v(" "),e("li",[e("code",[t._v("entrypoints")]),t._v("：entry 列表，包括动态引入所生产的 entry 项也会包含在这里面；")]),t._v(" "),e("li",[e("code",[t._v("children")]),t._v("：子 Compiler 对象的性能数据，例如 "),e("code",[t._v("extract-css-chunk-plugin")]),t._v(" 插件内部就会调用 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Ffaceyspacey%2Fextract-css-chunks-webpack-plugin%2Fblob%2FHEAD%2Fsrc%2Floader.js%23L82",target:"_blank",rel:"noopener noreferrer"}},[t._v("compilation.createChildCompiler"),e("OutboundLink")],1),t._v(" 函数创建出子 Compiler 来做 CSS 抽取的工作。")])]),t._v(" "),e("p",[t._v("我们可以从这些数据中分析出模块之间的依赖关系、体积占比、编译构建耗时等，Webpack 社区还提供了许多优秀的分析工具，能够将这些数据转换各种风格的可视化图表，帮助我们更高效地找出性能卡点，包括：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.github.io%2Fanalyse%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Analysis"),e("OutboundLink")],1),t._v(" ：Webpack 官方提供的，功能比较全面的 "),e("code",[t._v("stats")]),t._v(" 可视化工具；")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fstatoscope%2Fstatoscope",target:"_blank",rel:"noopener noreferrer"}},[t._v("Statoscope"),e("OutboundLink")],1),t._v("：主要侧重于模块与模块、模块与 chunk、chunk 与 chunk 等，实体之间的关系分析；")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fchrisbateman.github.io%2Fwebpack-visualizer%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Visualizer"),e("OutboundLink")],1),t._v("：一个简单的模块体积分析工具，真的很简单！")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Bundle Analyzer"),e("OutboundLink")],1),t._v("：应该是使用率最高的性能分析工具之一，主要实现以 Tree Map 方式展示各个模块的体积占比；")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Dashboard"),e("OutboundLink")],1),t._v("：能够在编译过程实时展示编译进度、模块分布、产物信息等；")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Funused-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unused Webpack Plugin"),e("OutboundLink")],1),t._v("：能够根据 "),e("code",[t._v("stats")]),t._v(" 数据反向查找项目中未被使用的文件。")])]),t._v(" "),e("h3",{attrs:{id:"webpack-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-analysis"}},[t._v("#")]),t._v(" Webpack Analysis")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.github.io%2Fanalyse%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Analysis"),e("OutboundLink")],1),t._v(" 是 webpack 官方提供的可视化分析工具，相比于其它工具，它提供的视图更全，功能更强大，能够通过创建依赖关系图对你的包进行更彻底的检查。"),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.github.io%2Fanalyse%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Analysis"),e("OutboundLink")],1),t._v(" 提供了非常齐全的分析视角，信息几乎没有失真，但上手难度稍高，信息噪音比较多，所以社区还提供了一个简化版 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fmshustov.github.io%2Fwebpack-deps-tree%2Fstatic%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-deps-tree"),e("OutboundLink")],1),t._v("，功能相似但用法更简单、信息更简洁，大家可以根据实际需要交叉使用。")]),t._v(" "),e("h3",{attrs:{id:"statoscope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statoscope"}},[t._v("#")]),t._v(" Statoscope")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fstatoscope%2Fstatoscope",target:"_blank",rel:"noopener noreferrer"}},[t._v("Statoscope"),e("OutboundLink")],1),t._v(" 也是一个非常强大的可视化分析工具，主要提供如下功能：")]),t._v(" "),e("ul",[e("li",[t._v("完整的依赖关系视图，涵盖 modules/chunks/assets/entrypoints/packages 维度；")]),t._v(" "),e("li",[t._v("entrypoints/chunks/packages/module 体积分析；")]),t._v(" "),e("li",[t._v("重复包检测；")]),t._v(" "),e("li",[t._v("多份 "),e("code",[t._v("stats")]),t._v(" 数据对比；")]),t._v(" "),e("li",[t._v("等等。")])]),t._v(" "),e("p",[t._v("Statoscope 提供了多种维度的统计信息，包括：Chunk 数量、模块总数、重复模块树、编译耗时、Initial Chunk 体积等；更重要的是，Statoscope 还展示了模块与模块、Chunk、Entry 等维度的依赖关系。我们可以据此推断出模块体积、为何需要打包该模块、有哪些模块被重复引用等信息。")]),t._v(" "),e("h3",{attrs:{id:"webpack-bundle-analyzer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-bundle-analyzer"}},[t._v("#")]),t._v(" Webpack Bundle Analyzer")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack-bundle-analyzer"),e("OutboundLink")],1),t._v(" 是一个非常有名的性能分析插件，只需要一些简单配置就可以在 Webpack 构建结束后生成 Tree Map 形态的模块分布统计图，用户可以通过对比 Tree Map 内容推断各模块的体积占比，是否包含重复模块、不必要的模块等。基于 Webpack Bundle Analyzer 提供的视图，我们可以分析出：")]),t._v(" "),e("ul",[e("li",[t._v("Bundle 包所包含的模块内容 —— 从而推断出产物中是否包含预期之外的模块；")]),t._v(" "),e("li",[t._v("确定模块体积大小与占比 —— 从而确定是否存在优化空间；")]),t._v(" "),e("li",[t._v("了解 Bundle 产物体积，以及经过压缩后的体积。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-bundle-size-analyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-bundle-size-analyzer"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdanvk%2Fsource-map-explorer%20",target:"_blank",rel:"noopener noreferrer"}},[t._v("source-map-explorer"),e("OutboundLink")],1),t._v(" 等工具也实现了类似功能，但分别适用于不同场景，建议你也了解一下相关用法，择优选用。")])]),t._v(" "),e("h3",{attrs:{id:"webpack-visualizer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-visualizer"}},[t._v("#")]),t._v(" Webpack Visualizer")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fchrisbateman.github.io%2Fwebpack-visualizer%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Visualizer"),e("OutboundLink")],1),t._v(" 是一个在线分析工具，可用于检测、可视化 Webpack 产物的构成模块。有两种用法，一是将 "),e("code",[t._v("stats.json")]),t._v(" 文件上传到在线 "),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fchrisbateman.github.io%2Fwebpack-visualizer%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("页面"),e("OutboundLink")],1),t._v("；二是使用 "),e("code",[t._v("webpack-visualizer-plugin")]),t._v(" 生成统计页面")]),t._v(" "),e("p",[t._v("但很遗憾，实测发现 webpack-visualizer-plugin 插件年久失修，只兼容 webpack 1.x ，所以现在几乎没有使用价值了。")]),t._v(" "),e("h3",{attrs:{id:"webpack-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dashboard"}},[t._v("#")]),t._v(" Webpack Dashboard")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-dashboard"),e("OutboundLink")],1),t._v(" 是一个命令行可视化工具，能够在编译过程中实时展示编译进度、模块分布、产物信息等")]),t._v(" "),e("h3",{attrs:{id:"speed-measure-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#speed-measure-plugin"}},[t._v("#")]),t._v(" Speed Measure Plugin")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fspeed-measure-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpeedMeasureWebpackPlugin"),e("OutboundLink")],1),t._v(" 插件能够统计出各个 Loader、插件的处理耗时，开发者可以根据这些数据分析出哪些类型的文件处理更耗时间")]),t._v(" "),e("h3",{attrs:{id:"unusedwebpackplugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unusedwebpackplugin"}},[t._v("#")]),t._v(" UnusedWebpackPlugin")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Funused-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("UnusedWebpackPlugin"),e("OutboundLink")],1),t._v(" 插件，它能够根据 webpack 统计信息，反向查找出工程项目里哪些文件没有被用到，我日常在各种项目重构工作中都会用到，非常实用。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" UnusedWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unused-webpack-plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnusedWebpackPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("directories")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("root")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h2",{attrs:{id:"性能优化总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化总结"}},[t._v("#")]),t._v(" 性能优化总结")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/images/devops/optimization2.png",alt:"optimization2"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);