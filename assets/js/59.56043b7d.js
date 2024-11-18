(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{397:function(e,t,v){"use strict";v.r(t);var _=v(8),l=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"http-报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-报文"}},[e._v("#")]),e._v(" HTTP 报文")]),e._v(" "),t("p",[e._v("http 报文分为：请求报文与响应报文")]),e._v(" "),t("h2",{attrs:{id:"请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[e._v("#")]),e._v(" 请求报文")]),e._v(" "),t("ul",[t("li",[e._v("请求行")]),e._v(" "),t("li",[e._v("请求头部")]),e._v(" "),t("li",[e._v("实体：请求的数据")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/blog/images/javascript/http%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87.png",alt:"请求报文"}})]),e._v(" "),t("h3",{attrs:{id:"请求行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[e._v("#")]),e._v(" 请求行")]),e._v(" "),t("p",[e._v("http 请求报文的第一个行。请求行主要由 "),t("strong",[e._v("方法字段")]),e._v("、"),t("strong",[e._v("URL 字段")]),e._v(" 和 "),t("strong",[e._v("HTTP 协议版本字段")]),e._v(" 构成。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("URL 字段")]),e._v(" "),t("p",[e._v("一个完整的包括类型、主机名和可选路径名的统一资源引用名。")])]),e._v(" "),t("li",[t("p",[e._v("方法字段")]),e._v(" "),t("p",[e._v("方法字段严格区分大小写，当前 HTTP 协议中的方法都是大写，方法字段如下：")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("请求方法")]),e._v(" "),t("ul",[t("li",[e._v("GET：请求获取 Request-URI 所标识的资源。(URI：通用资源标识符，URL是其子集，URI注重的是标识，而URL强调的是位置，可以将 URL 看成原始的 URI) 。")]),e._v(" "),t("li",[e._v("POST：在 Request-URI 所标识的资源后附加新的数据。支持 HTML 表单提交，表单中有用户填入的数据，这些数据会发送到服务器端，由服务器存储至某位置（例如发送处理程序）。")]),e._v(" "),t("li",[e._v("HEAD：请求 Request-URI 所标识的资源响应消息报头，HEAD 方法可以在响应时不返回消息体。")]),e._v(" "),t("li",[e._v("PUT：与 GET 相反，请求服务器存储一个资源，并用 Request-URI 做为其标识；例如发布系统。")]),e._v(" "),t("li",[e._v("DELETE：请求删除 URL 指向的资源。")]),e._v(" "),t("li",[e._v("OPTIONS：请求查询服务器的性能，或者查询与资源相关的选项。")]),e._v(" "),t("li",[e._v("TRACE：跟踪请求要经过的防火墙、代理或网关等，主要用于测试或诊断。")]),e._v(" "),t("li",[e._v("CONNECT：保留将来使用。")])])]),e._v(" "),t("h3",{attrs:{id:"请求头部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求头部"}},[e._v("#")]),e._v(" 请求头部")]),e._v(" "),t("p",[e._v("Request Headers 请求报文中常见的首部：")]),e._v(" "),t("blockquote",[t("p",[e._v("Accept首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Accept：指明服务器能发送的媒体类型。(eg: application/json, text/plain, "),t("em",[e._v("/")]),e._v(")。使用它并通过 content-type 响应头通知客户端它的选择。")]),e._v(" "),t("li",[e._v("Accept-Charset：支持使用的字符集。")]),e._v(" "),t("li",[e._v("Accept-Encoding：支持使用的编码方式。(eg: gzip, deflate, br)")]),e._v(" "),t("li",[e._v("Accept-Language：支持使用语言。(eg: en,zh;q=0.9)。使用它并通过 content-language 响应头通知客户它的选择。")])]),e._v(" "),t("blockquote",[t("p",[e._v("条件首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Expect：告诉服务器能够发送来哪些媒体类型")]),e._v(" "),t("li",[e._v("If-Modified-Since：是否在指定时间以来修改过此资源")]),e._v(" "),t("li",[e._v("If-None-Match：如果提供的实体标记与当前文档的实体标记不符，就获取此文档")])]),e._v(" "),t("blockquote",[t("p",[e._v("安全相关首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Authorization：客户端提交给服务端的认证数据。(eg: 帐号和密码,token)。用于向服务器认证用户代理的凭证，通常在服务器响应 401 Unauthorized 状态和 WWW-Authenticate 标题后。")]),e._v(" "),t("li",[e._v("Cookie：客户端发送给服务器端身份标识。")])]),e._v(" "),t("blockquote",[t("p",[e._v("其他首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Host：请求的主机名和端口号，虚拟主机环境下用于不同的虚拟主机。(eg: github.com:8080)")]),e._v(" "),t("li",[e._v("Range：请求实体的字节范围。(eg: 存在，浏览器可能会尝试恢复中断的下载，而不是从头再次开始。)")]),e._v(" "),t("li",[e._v("Referer：指明了请求当前资源的原始资源的URL。")]),e._v(" "),t("li",[e._v("User-Agent：用户代理，使用什么工具发出的请求。(eg: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36)")])]),e._v(" "),t("blockquote",[t("p",[e._v("预检请求")])]),e._v(" "),t("ul",[t("li",[e._v("Origin："),t("code",[e._v("<origin>")]),e._v(" 表明预检请求或实际请求的源站。在所有访问控制请求（Access control request）中，Origin 首部字段总是被发送。")]),e._v(" "),t("li",[e._v("Access-Control-Request-Method："),t("code",[e._v("<method>")]),e._v(" 用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器。")]),e._v(" "),t("li",[e._v("Access-Control-Request-Headers："),t("code",[e._v("<field-name>[, <field-name>]*")]),e._v(" 用于预检请求。其作用是，将实际请求所携带的首部字段告诉服务器。")])]),e._v(" "),t("blockquote",[t("p",[e._v("通用首部 Request Headers 与 Response Headers 中都有的首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Connetion：连接管理。(eg: keep-alive、close)")]),e._v(" "),t("li",[e._v("Cache-Control：缓存指示。")]),e._v(" "),t("li",[e._v("Content-Length标头：实体的长度。")]),e._v(" "),t("li",[e._v("Content-Tyep标头：实体的媒体类型。")]),e._v(" "),t("li",[e._v("Via：显示报文经过的中间节点。")])]),e._v(" "),t("h3",{attrs:{id:"请求数据-实体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求数据-实体"}},[e._v("#")]),e._v(" 请求数据(实体)")]),e._v(" "),t("p",[e._v("实体主体用于POST方法中。")]),e._v(" "),t("h2",{attrs:{id:"响应报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[e._v("#")]),e._v(" 响应报文")]),e._v(" "),t("ul",[t("li",[e._v("响应状态行")]),e._v(" "),t("li",[e._v("响应首部行")]),e._v(" "),t("li",[e._v("响应实体")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/blog/images/javascript/http%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87.png",alt:"响应报文"}})]),e._v(" "),t("h3",{attrs:{id:"状态行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[e._v("#")]),e._v(" 状态行")]),e._v(" "),t("p",[e._v("状态行包括三个字段：协议版本、状态码 与 原因短语。")]),e._v(" "),t("h3",{attrs:{id:"响应首部-首部行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应首部-首部行"}},[e._v("#")]),e._v(" 响应首部(首部行)")]),e._v(" "),t("ul",[t("li",[e._v("Access-Control-Allow-Credentials：true 是否允许浏览器读取 response 的内容当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用 credentials。")]),e._v(" "),t("li",[e._v("Access-Control-Expose-Headers： "),t("code",[e._v("X-My-Custom-Header, X-Another-Custom-Header")]),e._v(" 在跨源访问时，XMLHttpRequest 对象的 getResponseHeader() 方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。(浏览器访问头的白名单)")]),e._v(" "),t("li",[e._v("Access-Control-Allow-Methods： "),t("code",[e._v("<method>[, <method>]*")]),e._v(" 用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。")]),e._v(" "),t("li",[e._v("Access-Control-Allow-Origin： "),t("code",[e._v("<origin> | * origin")]),e._v(" 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。如果服务端指定了具体的域名而非“*”，那么响应首部中的 Vary 字段的值必须包含 Origin。这将告诉客户端：服务器对不同的源站返回不同的内容。")]),e._v(" "),t("li",[e._v("Access-Control-Allow-Headers： "),t("code",[e._v("<field-name>[, <field-name>]*")]),e._v(" 用于预检请求的响应。其指明了实际请求中允许携带的首部字段。")]),e._v(" "),t("li",[e._v("Access-Control-Max-Age： "),t("code",[e._v("<delta-seconds>")]),e._v(" 指定了 preflight 请求的结果能够被缓存多久（秒）")]),e._v(" "),t("li",[e._v("Age：（从最初创建开始）响应持续时间。包含以秒计的对象一直在代理缓存的时间。")]),e._v(" "),t("li",[e._v("Allow：允许对此资源使用的请求方法。如果服务器响应405 Method Not Allowed状态码来指示可以使用哪种请求方法，则必须发送此标头。例如，空白Allow标题表示该资源不允许任何请求方法，例如可能暂时针对给定资源发生。")])]),e._v(" "),t("blockquote",[t("p",[e._v("内容首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Content-Disposition：作为网页或作为网页的一部分或作为附件下载并且本地保存。(eg：attachment;filename=index.doc)")]),e._v(" "),t("li",[e._v("Content-Encoding：支持的编码。")]),e._v(" "),t("li",[e._v("Content-Language：支持的自然语言。")]),e._v(" "),t("li",[e._v("Content-Length：文本长度。")]),e._v(" "),t("li",[e._v("Content-Location：资源所在位置。")]),e._v(" "),t("li",[e._v("Content-Range：在整个资源中此实体表示的字节范围。")]),e._v(" "),t("li",[e._v("Content-Type：主体的对象类型。")])]),e._v(" "),t("blockquote",[t("p",[e._v("协商首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Accept-Ranges: 对当前资源来讲，服务器所能够接受的范围类型")]),e._v(" "),t("li",[e._v("Vary: 首部列表，服务器会根据列表中的内容挑选出最适合的版本发送给客户端\n跟安全相关的响应首部：")]),e._v(" "),t("li",[e._v("Set-Cookie: 服务器端在某客户端第一次请求时发给令牌")]),e._v(" "),t("li",[e._v("WWW-Authentication: 质询，即要求客户提供帐号和密码")])]),e._v(" "),t("blockquote",[t("p",[e._v("缓存首部：")])]),e._v(" "),t("ul",[t("li",[e._v("ETag: 协商缓存中的强校验器。如果给定 URL 处的资源发生更改，则Etag必须生成新值")]),e._v(" "),t("li",[e._v("Expires: http1.0 的产物，资源过期时间，绝对时间，强缓存控制字段。Cache-Control 优先级高于 - Expires。")]),e._v(" "),t("li",[e._v("Last-Modified: 上一次的修改时间")])]),e._v(" "),t("blockquote",[t("p",[e._v("其他首部：")])]),e._v(" "),t("ul",[t("li",[e._v("Date：消息产生的时间。")])]),e._v(" "),t("h3",{attrs:{id:"实体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实体"}},[e._v("#")]),e._v(" 实体")]),e._v(" "),t("p",[e._v("实体包含了Web客户端请求的对象。Content-Length标头及Content-Type标头用于计算实体的位置、数据类型和数据长度。当Web服务器接收到Web客户端的请求报文后，对HTTP请求报文进行解析，并将Web客户端的请求的对象取出打包，通过HTTP响应报文将数据传回给Web客户端，如果出现错误则返回包含对应错误的错误代码和错误原因的HTTP响应报文。")]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.php.cn/manual/view/35521.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP中文开发手册"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);