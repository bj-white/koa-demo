/*
 * @Description: 全局错误处理中间件
 * @Author: hai-27
 * @Date: 2020-04-07 23:11:48
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-07 23:13:33
 */
const fs = require('fs')
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    fs.writeFileSync('./logs/error.log', error.message, 'utf-8', () => {
      console.log('写入成功')
    })
    ctx.body = {
      code: '500',
      msg: '服务器未知错误'
    }
  }
}