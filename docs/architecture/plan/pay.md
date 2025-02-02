# 三方支付与收银台

在当今数字化时代，第三方支付平台如支付宝、微信支付和苹果的内购支付（IAP）已成为我们日常生活的一部分。然而，不同支付方式在客户端、H5页面和PC端的接入方式和交互流程各不相同，这给业务方带来了不小的挑战。为了简化这一流程，构建一个统一的业务端收银台显得尤为关键。

这个收银台将实现以下功能：

- 统一接入第三方支付：通过一个集成平台，业务方可以轻松接入各种支付渠道，无需为每个渠道单独开发和维护接口。
- 统一支付流程：为用户提供一个标准化的支付体验，无论他们选择哪种支付方式，都能享受到一致的操作流程。
- 统一收银台组件：收银台组件将展示所有可用的支付渠道和方式，以及相关的优惠信息等，帮助用户做出最佳选择。
- 简化业务方工作流程：通过提供统一的支付渠道接入口，业务方可以避免重复的工作，节省时间和资源。

通过这种方式，我们不仅提升了用户体验，还为业务方提供了一个高效、便捷的支付解决方案。

## APP 内支付流程

APP 支付是指商家在商家移动端 App 中集成第三方支付 SDK，唤起第三方 APP 来完成付款的一种支付方式。下面以支付宝支付为例，介绍支付流程：

![alipay1](/blog/images/architecture/alipay1.png)

涉及 5 个关联方：用户、商户 APP、商户服务端、第三方支付 APP，第三方支付服务端

1. 用户在商户 APP 下单，并请求商户服务端生成订单。
2. 商户服务端通过第三方支付的 SDK 生成 orderStr (包含了订单信息和签名)
3. 商户 APP 通过 SDK 唤起第三方支付 APP，并传递 orderStr，通过第三方支付服务端进行支付预下单（生成预支付订单 perpay_id）, 正常场景下，会唤起第三方 APP 收银台等待用户核身（进行密码验证）；异常场景下，会返回异常信息。
4. 用户在第三方支付 APP 中输入确认密码，请求第三方支付服务端进行真正的支付交易。
5. 商户 APP 轮询获取支付状态。完成支付会跳转回商家页，并返回最终的支付结果（即同步通知）。同时通知商户服务端支付结果（异步通知），未收到可再次通过调用第三方支付服务端接口主动查询。同步通知的支付结果较简单不可靠，还是简易商户 APP 轮询调商户服务端接口异步加查询的方式获取支付结果。
6. 若交易发生后的一段时间内，由于业务原因（如金额错误、用户退款或者对账不平等）需要退款时，商家 APP 调用退款接口发起退款，商家服务端调用第三方支付服务端进行退款，商检 APP 轮询查询退款结果。

由此，前端要做的事情：

1. 调用订单接口下单，创建订单，获取 orderStr（订单信息和签名）。
2. 调用 JSI（JSBridge），经客户端唤起第三方支付平台进行预下单（获取预支付订单 perpay_id）。
3. 获取支付状态，查询服务端获取用户支付状态（轮询或 websocket）。
4. 若支付完成后需要退款，前端调用退款接口发起退款，调用服务端进行退款，轮询查询退款结果。

::: tip 同步与异步通知支付结果
同步返回的数据，商家需在服务端验证，验证通过后，可以认为本次用户付款成功。有些时候会出现商家 App 在支付宝付款阶段被关闭导致无法正确收到同步结果，此时支付结果可以完全依赖服务端的异步通知。由于同步通知和异步通知都可以作为支付完成的凭证，且异步通知支付宝一定会确保发送给商家服务端。为了简化集成流程，商家可以将同步结果仅作为一个支付结束的通知（忽略执行校验），实际支付是否成功，完全依赖服务端异步通知。

异步通知是指一笔订单支付完成后，支付宝会将该笔订单的变更信息，沿着商家调用支付请求时所传入的异步通知地址 notify_url，通过 POST 请求的形式将支付结果作为参数通知到商家系统。
:::

## 扫码支付流程

扫码支付是用户通过第三方支付 APP 扫描商家提供的二维码，完成支付的一种支付方式。这里以支付宝为例，在 PC 端或者汽车中控场景下，介绍支付流程：

![alipay2](/blog/images/architecture/alipay2.png)

也涉及 5 个关联方：用户、商户前台、商户后台端、第三方支付 APP，第三方支付后台

1. 商户前台调用下单接口请求商户服务端生成订单，同时商户服务端通过 SDK 调用第三方支付后台预下单，获得该订单的二维码链接 qr_code 返回给前台。
2. 商户前台利用 qrcode 等二维码生成器将二维码链接生成二维码图片（canvas），并展示给用户，并等待 3-5 秒后轮询调用查询订单状态及支付结果（轮询等待用户支付），若在最后一次查询仍然返回等待用户付款的情况下，必须立即将这笔交易撤销。
3. 用户通过第三方支付 APP 扫描二维码，并输入确认密码，请求第三方支付后台进行支付交易处理完交易后，将支付结果返回给用户和商户（扫码支付不存在同步跳转，支付后只会触发异步通知）。

## 收银台初探

![alipay3](/blog/images/architecture/alipay3.png)

[云音乐会员支付链路优化实践](https://mp.weixin.qq.com/s/9Qp_tcHyn_rneFM_ES3LZw)
