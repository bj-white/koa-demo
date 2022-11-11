const userDao = require('../models/dao/userDao');
const jsonwebtoken = require('jsonwebtoken');
const { secret, privateKey } = require('../../config');
const JSEncrypt = require('jsencrypt/bin/jsencrypt');

module.exports = {
  login: async ctx => {
    let { usercode, password } = ctx.request.query;

    const encrypt = new JSEncrypt();
    encrypt.setPrivateKey(privateKey)
    password = encrypt.decrypt(password)

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
      const token = jsonwebtoken.sign({ id: user[0].id }, secret, { expiresIn: '10s' }) // token 有效期为3小时

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