const express = require('express');
const compression = require('compression');
const opn = require('opn');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const fs = require('fs');
// const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const Config =  require('../config');
const port = Config.port || 3000;
const autoOpenBrowser = true;
const app = express();
const resolve = file => path.resolve(__dirname,file);

const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler, {
  // contentBase:Config.publicPath,
  logLevel: 'error',
  logTime: true,
  historyApiFallback: true,
  noInfo: true,
  // filename: webpackConfig.output.filename,
  // publicPath: Config.output.publicPath,
  quiet: true,
  hot: true,
  stats: { colors: true },
  headers: { 'X-Custom-Header': 'yes' },
  stats: {
    colors: true
  }
});
const hotMiddleware = webpackHotMiddleware(compiler,{
  log: (msg) => { console.log(msg); }
});
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })
app.use(cors());
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.use(require('connect-history-api-fallback')());
app.use(compression());
app.use(devMiddleware);
app.use(hotMiddleware);
// app.use(express.static('./dll'));
app.use('/keep', proxy({target: 'http://127.0.0.1/', changeOrigin: true}));
app.use('/ficloud', proxy({target: 'https://acc.yonyoucloud.com/', 
  changeOrigin: true, 
  // cookieDomainRewrite: '10.3.14.238',
  headers: {
    Cookie: 'JSESSIONID=C02C54D88BBECD20CE1F6216BD1AC466; test=visible; _ga=GA1.2.634455624.1522226824; acw_tc=AQAAANLk5grZMwAABwlne5wuf5uh9n32; Hm_lvt_yht=1522226801,1522715565; userCode=admin6666; userName=YWRtaW42NjY2; userId=01d367fd-107d-4b9e-979c-05ec15ea58e8; authToken=; tenantId=yz5kyz5w; u_usercode=01d367fd-107d-4b9e-979c-05ec15ea58e8; tenantid=yz5kyz5w; userType=-1; appId=yonyoufi; NTKF_T2D_CLIENTID=guestB04245AB-322C-C9C2-C67F-8987752F6497; nTalk_CACHE_DATA={uid:yu_1000_ISME9754_guestB04245AB-322C-C9,tid:1522725778734230}; PHPSESSID=u0l8mhdi6ep15o7jpvenr3an92; Hm_lvt_cloud=1522226812,1523154855; Hm_lpvt_cloud=1523521532; _gid=GA1.2.1728458337.1523521556; Hm_lpvt_yht=1523579962; at=8eb3bb93f581a06a7d974748644ca070; yonyou_uid=01d367fd-107d-4b9e-979c-05ec15ea58e8; yonyou_uname=admin6666; yht_username=ST-726-qTyPnMBYlLkfhAdRw4F9-cas01.example.org__01d367fd-107d-4b9e-979c-05ec15ea58e8; yht_usertoken=U%2FT53xoTOuz6r1UODw59s%2FYrV0h5g57IqCMPntJnQmU7FK51xv7fdBS%2FszZiZkNavQTz5%2B%2BZQ3fjv%2Bm%2BYAtrzw%3D%3D; lastLoginDate=1523537562255; token=d2ViLDM2MDAsbXdFQ0c0Q2RIU20rM004RUlNbU9DYUF4djlzc2hoU3ZIaERkZ2lHVlQyNkkxaWlxc051dGVCSkk1RGZJTG1pSGFLeEc0c1JiNi9YeCtoaWJCMUNBY0E9PQ; u_logints=1523579968820',
  }
  /**
   * 
      option.target：url字符串将与url模块解析
      option.forward：url字符串将与url模块解析
      option.target：传递给http(s)请求的对象（参阅Node https代理和http代理对象）
      option.ssl：传递给https.createServer()的对象
      option.ws：true / false，如果你想要代理websockets
      option.xfwd：true / false，添加x-forward请求头
      option.secure：true / false，如果你想要验证SSL证书
      option.toProxy：true / false，将绝对URL作为path（对代理使用代理时很有用）
      option.prependPath：true / false，默认：true-指定是否要将目标的路径预置到代理路径
      option.ignorePath：true / false，默认：false-指定是否要忽略传入请求的代理路径（注意：如果需要，您将必须附加/手动）。
      option.localAddress：用于传出连接的本地接口字符串
      option.changeOrigin：true / false，默认值：false - 将主机头的源更改为目标URL
      option.auth：基本认证，即“用户：密码”来计算授权头。
      option.hostRewrite：重写（301/302/307/308）重定向的位置主机名。
      option.autoRewrite：根据请求的主机/端口重写（301/302/307/308）重定向的位置主机/端口。默认值：false。
      option.protocolRewrite：重写位置协议（301/302/307/308）重定向到’http’或’https’。默认值：null。
      option.cookieDomainRewrite：重写set-cookie标头的域。可能的值： 
      - false（默认）：禁止重写cookie 
      - 字符串：新域名，比如说cookieDomainRewrite:"new.domain"。使用cookieDomainRewrite:""删除域名。 
      - 对象：域名到新域名的映射，用”*”匹配所有域名。 
      举个栗子：保持一个域名不变，重写一个域名并且删除其他的： 

      cookieDomainRewrite: { 
      "unchanged.domain": "unchanged.domain", 
      "old.domain": "new.domain", 
      "*": "" 
      } 
      option.headers：对象，添加请求头。（比如：{host:'www.example.org'}）
      option.proxyTimeout：超时时间（毫秒）当代理接收不到目标服务器的返回
   */
}));
// https://acc.yonyoucloud.com/
app.use(express.static(Config.staticPath));
var uri = Config.host+':'+Config.port; //'http://localhost:' + port

var _resolve;
// var readyPromise = 
new Promise(resolve => {
  _resolve = resolve;
});
console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  // when env is testing, don't need open it
  if (autoOpenBrowser) {
    opn(uri);
  }
  _resolve();
});

// var server = 
app.listen(port);
