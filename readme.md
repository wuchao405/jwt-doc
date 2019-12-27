# 一.什么是jwt token
jwt是`JSON Web Token`的缩写，这是一种无状态的用户识别和数据加密方式。在web项目中应用非常广泛，可以说是目前最流行的跨域身份验证方案。

# 二.jwt token能做什么
- 1.用户认证（Authentication）
- 2.用户授权（Authorization）
- 3.联合认证（Federated identity）
- 4.客户端无状态session（Client-side sessions）
- 5.客户端加密（Client-side secrets）

# 三.什么是客户端无状态session
### 3.1 session是什么，为什么使用session
大部分web项目使用http协议实现客户端与服务端的交互，http是一种用完即销毁的一次性链接。客户端每次请求都要重新建立新的http链接，服务端接收到请求进行处理，再返回给客户端，最后关闭http链接。因此，我们说http是一种`无状态协议`。

既然http无状态，就无法携带上一次请求的信息。为了处理这个问题，Session出现了。

浏览器将这个SessionId保存在内存中，我们称之为无过期时间的Cookie。浏览器关闭后，这个Cookie就会被清掉，它不会存在于用户的Cookie临时文件。

以后浏览器每次请求都会额外加上这个参数值，服务器会根据这个SessionId，就能取得客户端的数据信息。

如果客户端浏览器意外关闭，服务器保存的Session数据不是立即释放，此时数据还会存在，只要我们知道那个SessionId,就可以继续通过请求获得此Session的信息，因为此时后台的Session还存在，当然我们可以设置一个Session超时时间，一旦超过规定时间没有客户端请求时，服务器就会清除对应SessionId的Session信息。


# 3.2.什么是无状态session
其实就是客户端数据。但是这种客户端数据是安全权的，用户无法篡改，因为它使用了签名和加密方式
![stateless_session-无状态session](./imges/stateless_session.png)

# 四.jwt安全性考虑
