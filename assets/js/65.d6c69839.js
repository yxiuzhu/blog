(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{402:function(e,t,v){"use strict";v.r(t);var _=v(8),r=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"websocket-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-协议"}},[e._v("#")]),e._v(" WebSocket 协议")]),e._v(" "),t("h2",{attrs:{id:"轮询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轮询"}},[e._v("#")]),e._v(" 轮询")]),e._v(" "),t("p",[e._v("WebSocket 之前，如果需要在客户端和服务之间双向通信，需要通过 HTTP 轮询来实现， HTTP 轮询分为轮询与长轮询：")]),e._v(" "),t("p",[e._v("轮询是指浏览器通过 JavaScript 启动一个定时器，然后以固定的间隔给服务器发请求，询问服务器有没有新消息，缺点：")]),e._v(" "),t("ul",[t("li",[e._v("实时性不够")]),e._v(" "),t("li",[e._v("频繁的请求会给服务器带来极大的压力")])]),e._v(" "),t("p",[e._v("长轮询是指浏览器发送一个请求时，服务器先拖一段时间，等到有消息了再回复。这个机制暂时地解决了实时性问题，相比轮询，长轮询减少了请求的次数，只在有新数据时才响应，从而节省了带宽和服务器资源。但是它带来了新的问题：")]),e._v(" "),t("ul",[t("li",[e._v("以多线程模式运行的服务器会让大部分线程大部分时间都处于挂起状态，极大地浪费服务器资源")]),e._v(" "),t("li",[e._v("一个HTTP连接在长时间没有数据传输的情况下，链路上的任何一个网关都可能关闭这个连接，而网关是我们不可控的")])]),e._v(" "),t("p",[e._v("因此，HTML5 新增了 WebSocket 协议，能够在浏览器和服务器之间建立一个不受限的双向通信的通道。")]),e._v(" "),t("h2",{attrs:{id:"websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[e._v("#")]),e._v(" WebSocket")]),e._v(" "),t("p",[e._v("http 通过判断 header 中是否包含 Connection: Upgrade 与 Upgrade: websocket 来判断当前是否需要升级到 websocket 协议，除此之外，还有其它 header：")]),e._v(" "),t("ul",[t("li",[e._v("Sec-WebSocket-Key ：浏览器随机生成的安全密钥")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Version ：WebSocket 协议版本")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Extensions ：用于协商本次连接要使用的 WebSocket 扩展")]),e._v(" "),t("li",[e._v("Sec-WebSocket-Protocol ：协议")])]),e._v(" "),t("p",[e._v("当服务器同意进行 WebSocket 连接时，返回响应码 101")]),e._v(" "),t("p",[e._v("WebSocket 特点：")]),e._v(" "),t("ul",[t("li",[e._v("支持双向通信，实时性更强；")]),e._v(" "),t("li",[e._v("可以发送文本，也可以二进制文件；")]),e._v(" "),t("li",[e._v("协议标识符是 ws，加密后是 wss ；")]),e._v(" "),t("li",[e._v("较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有 2~10 字节（取决于数据包长度），客户端到服务端的的话需要加上额外的 4 字节的掩码。而 HTTP 协议每次通信都需要携带完整的头部；")]),e._v(" "),t("li",[e._v("支持扩展。ws 协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）")]),e._v(" "),t("li",[e._v("无跨域问题。")])]),e._v(" "),t("h2",{attrs:{id:"sse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sse"}},[e._v("#")]),e._v(" SSE")]),e._v(" "),t("p",[e._v("Server-Sent Events（SSE）是一种基于HTTP的服务器推送技术，它允许服务器主动向客户端推送实时数据更新。")]),e._v(" "),t("h3",{attrs:{id:"工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[e._v("#")]),e._v(" 工作原理")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("客户端连接")]),e._v("：客户端通过创建 "),t("code",[e._v("EventSource")]),e._v(" 对象来打开一个事件流，与服务器建立持久化的连接。")]),e._v(" "),t("li",[t("strong",[e._v("服务器推送")]),e._v("：服务器通过 HTTP 服务向客户端发送数据，数据以 "),t("code",[e._v("text/event-stream")]),e._v(" 格式发送，每条数据包含一个事件名称和事件数据。")]),e._v(" "),t("li",[t("strong",[e._v("客户端接收")]),e._v("：客户端接收到数据后，会触发相应的事件处理器，根据接收到的数据执行相应的操作。")]),e._v(" "),t("li",[t("strong",[e._v("连接关闭")]),e._v("：当客户端不再需要接收数据时，可以关闭 "),t("code",[e._v("EventSource")]),e._v(" 对象，从而关闭与服务器之间的连接。")])]),e._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("单向性")]),e._v("：SSE 是单向的，数据只能从服务器发送到客户端，无法从客户端发送到服务器。这使得 SSE 在某些场景下更加适合，例如实时更新或通知系统。")]),e._v(" "),t("li",[t("strong",[e._v("简单易用")]),e._v("：SSE 的 API 相对简单，易于理解和使用。开发者可以快速实现服务器向客户端推送数据的功能。")]),e._v(" "),t("li",[t("strong",[e._v("持久化连接")]),e._v("：SSE 使用持久化的连接，减少了建立连接的开销。这对于频繁发送数据的场景非常有利。")]),e._v(" "),t("li",[t("strong",[e._v("跨平台兼容性")]),e._v("：SSE 基于 HTTP 协议，因此可以在各种浏览器和平台上使用，具有较好的兼容性。")])]),e._v(" "),t("h3",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),t("p",[e._v("SSE 适用于需要服务器向客户端推送实时数据的场景，以下是一些典型的应用场景：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("实时数据推送")]),e._v("：如股票行情、新闻资讯、聊天消息等。")]),e._v(" "),t("li",[t("strong",[e._v("数据监控")]),e._v("：监控服务器或系统的状态，以便及时发现问题。")]),e._v(" "),t("li",[t("strong",[e._v("进度更新")]),e._v("：更新任务的进度，如文件上传、视频转码等。")])]),e._v(" "),t("h3",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),t("p",[e._v("客户端可以通过以下方式实现 SSE：")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("检测支持性")]),e._v("：检查浏览器是否支持 SSE，通过 "),t("code",[e._v("window.EventSource")]),e._v(" 来检测。")]),e._v(" "),t("li",[t("strong",[e._v("创建连接")]),e._v("：实例化一个 "),t("code",[e._v("EventSource")]),e._v(" 对象，可以指定 URL 和跨域选项 "),t("code",[e._v("withCredentials")]),e._v("。")]),e._v(" "),t("li",[t("strong",[e._v("监听事件")]),e._v("：通过 "),t("code",[e._v("onmessage")]),e._v(" 或 "),t("code",[e._v("addEventListener")]),e._v(" 来接收和处理服务器发送的消息。")])]),e._v(" "),t("p",[e._v("服务端需要设置 HTTP 头部 "),t("code",[e._v("Content-Type: text/event-stream")]),e._v(" 并保持连接不断开，以持续发送事件。以下是服务端实现 SSE 的基本步骤：")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("设置响应头")]),e._v("：设置 "),t("code",[e._v("Content-Type")]),e._v(" 为 "),t("code",[e._v("text/event-stream")]),e._v("，并保持连接打开。")]),e._v(" "),t("li",[t("strong",[e._v("发送事件")]),e._v("：服务器可以通过写入特定的格式来发送事件，每个事件由 "),t("code",[e._v("event:")]),e._v("、"),t("code",[e._v("data:")]),e._v("、"),t("code",[e._v("id:")]),e._v(" 等字段组成，并通过两个换行符结束。")])]),e._v(" "),t("p",[e._v("SSE 自带客户端重启，在和服务器端失去连接，或者服务器端返回服务器端超时的时候会自动重连。不需要手动维护重连和重试。")]),e._v(" "),t("h3",{attrs:{id:"与-websocket-的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与-websocket-的比较"}},[e._v("#")]),e._v(" 与 WebSocket 的比较")]),e._v(" "),t("p",[e._v("与 WebSocket 相比，SSE 更简单、更轻量级，且性能更好。WebSocket 支持全双工通信，而 SSE 只支持服务器到客户端的单向数据流。SSE 适用于那些只需要服务器向客户端单向数据流的场景。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903909148868621",target:"_blank",rel:"noopener noreferrer"}},[e._v("严选 WebSocket 协议"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903796347240461#heading-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web 实时推送技术的总结"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903698498322439",target:"_blank",rel:"noopener noreferrer"}},[e._v("手摸手教你使用WebSocket"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903519649005576",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket探秘"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903871710494733#heading-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSockets 与长轮询的较量"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);