/*
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-07 23:40:51
 */
const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaBody = require('koa-body');
const jsonwebtoken = require('jsonwebtoken');

let { Port, staticDir, secret } = require('./config');

let app = new Koa();

// 处理异常
/* const error = require('./app/middleware/error');
app.use(error); */

// 为静态资源请求重写url
const rewriteUrl = require('./app/middleware/rewriteUrl');
app.use(rewriteUrl);
// 使用koa-static处理静态资源
app.use(KoaStatic(staticDir));

// 处理请求体数据
const koaBodyConfig = require('./app/middleware/koaBodyConfig');
app.use(KoaBody(koaBodyConfig));

/* app.use(async (ctx, next) => {
  let token = ctx.request.header.authorization?.split(' ')
  if (token?.length === 2) {
    token = token[1]
  }
  console.log(token)
  const result = jsonwebtoken.verify(token, secret)
  console.log(result)
  await next()
}) */

// 使用路由中间件
const Routers = require('./app/routers');
app.use(Routers.routes()).use(Routers.allowedMethods());

app.listen(Port, () => {
  console.log(`服务器启动在${ Port }端口`);
});