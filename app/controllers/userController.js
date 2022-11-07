/*
 * @Description: 用户模块控制器
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-27 16:03:09
 */
const userDao = require('../models/dao/userDao');
const jsonwebtoken = require('jsonwebtoken');
const { secret } = require('../../config');

module.exports = {
  login: async ctx => {
    const { usercode, password } = ctx.request.query;

    if (!usercode || !password) {
      ctx.body = {
        code: '001',
        msg: '用户名或密码不能为空'
      }
      return;
    }

    const user = await userDao.login(usercode, password);

    if (!user.length) {
      ctx.body = {
        code: '002',
        msg: '用户名或密码错误'
      }
      return;
    }

    if (user.length === 1) {
      const token = jsonwebtoken.sign({ id: user[0].id }, secret, { expiresIn: '3h' }) // token 有效期为3小时

      ctx.body = {
        code: '003',
        data: token,
        msg: 'ok'
      }
      return;
    }

    ctx.body = {
      code: '004',
      msg: '未知错误'
    }
    return;
  },
  getUserList: async ctx => {
    const list = await userDao.getUserList();
    ctx.body = {
      code: '200',
      msg: 'ok',
      list
    }
  },
};