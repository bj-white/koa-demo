const userDao = require('../models/userDao');
const jsonwebtoken = require('jsonwebtoken');
const { secret, privateKey } = require('../../config');
const NodeRsa = require('node-rsa');

module.exports = {
  login: async ctx => {
    let { usercode, password } = ctx.request.query;

    /* const key = new NodeRsa({ b: 1024 })
    key.setOptions({ encryptionScheme: 'pkcs1' })

    const publicPem = key.exportKey('pkcs8-public-pem')
    const privatePem = key.exportKey('pkcs8-private-pem')

    console.log(publicPem)
    console.log(privatePem) */

    const decrypt = new NodeRsa(privateKey, 'pkcs8-private-pem')
    decrypt.setOptions({ encryptionScheme: 'pkcs1' })
    password = decrypt.decrypt(password, 'utf8')

    if (!usercode || !password) {
      ctx.body = {
        code: '001',
        msg: '用户名或密码不能为空'
      }
      return;
    }

    const user = await userDao.login(usercode, password);

    console.log(user.length);

    if (!user.length) {
      console.log(1)
      ctx.body = {
        code: '002',
        msg: '用户名或密码错误'
      }
      return;
    }
    console.log(2)

    if (user.length === 1) {
      const token = jsonwebtoken.sign({ id: user[0].id }, secret, { expiresIn: '3h' }) // token 有效期为小时

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
  register: async ctx => {
    let { usercode, password } = ctx.request.query;
    console.log(usercode, password)
    const user = await userDao.register(usercode, password);
    ctx.body = {
      code: '200',
      msg: 'ok',
      user
    }
  }
};