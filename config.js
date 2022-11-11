/*
 * @Description: 全局配置信息
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-28 23:21:30
 */
const path = require('path');

module.exports = {
  Port: 3000, // 启动端口
  staticDir: path.resolve('./public'), // 静态资源路径
  uploadDir: path.join(__dirname, path.resolve('public/')), // 上传文件路径
  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: 'localhost',
    port: 33061,
    user: 'root',
    password: '123456',
    database: 'storeDB'
  },
  secret: 'moyufed-test',
  privateKey: `-----BEGIN PRIVATE KEY-----
  MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgV8aVCfo0pHJb
  EnB/1DQ0aKshup6dc7YC6i3Dlx9S9YNpOcnWFwJn1xodQ4hSXupB7h6Nusb9CWzB
  qcfNfq5yjQMJWecAAqnoAFxxPmSOT4yZUuSdM5jvXocdWVC+c2F1e07RnmG1A2um
  pwNgNBzNAdbHvtyydZLQEMzZmlgiRq5laKHYPobz94h4qMb/P65By0xwrmfIcoAT
  CcN59Pvz28rqgDw5gnjpMk6FLgzRlsCuHAY5+SARG3UNdZRl2Bags2tmcq8VCdtd
  jkyoVnx0Nr4vYYTjLpSKV7cwW8MQUnhpf5CmOFy50QXVhpVqAsJoEg+DXMuQZCMt
  H82xQWwxAgMBAAECggEAEuKwv+koG/hf/BSwTcKCZosNJPi904ljIBmwoo99PpGW
  b2xC9nfXZwBvnVkLB8wfsk8mWU4I5FI/yonNXRo1+0StpcLgtFqFDRfCsHHNK0G9
  F0coIaevTy9I9oqHRpEV+jrYJsNLfF5+WHgky5t3dTabaxNBJvDI3CUd6Y+ZrcDX
  ICeHH8AJd3gVpcIyK+/J4/E2tKWP22wRq6SEXQoyVOM9xeVujtOTIvEFct54wqPC
  OPSuU/L8OLpJq2CZdffxpagZr9TLu29V+A1rjMbdT+rWzfuF9zSB/GEem5m4YaMB
  iNR678eygHCN6aAkHsG+70MPgZVFF6QASBetQvm2QQKBgQD0jcoRin1Bm8i5rate
  NmlSJR2Vx0ap0TphRgfrcJqGsLEZHqZJKqxP8Py73OwfU6TZc6XIfitNM2fAkSM4
  fXtOp+Q0RxHz68S7NMCPNeVnln6825WtjEp1icSoGierKig4bMKQ1dyp9Xm7AOW6
  3Sf/TXOui/10gCeWBCCUJXbPKQKBgQDq19IyO+H5aEI+rO26iesESRSaaM0ba41z
  CKvoNHszXhmKoGjYvGufaPV5O+mYbo/Q1FXiwaLY9UAlQhMe3NYARq8K83WKGoLS
  Uz5UbhtrUrzYCa1PoEby1S8ESb2tHIe9+fQW3Rbe+1MlbBUCgdEr1T9zc2paORDk
  BTkSWjw9yQKBgQCfWBvH3iLLMwRQ57X3RyDM414pj5SdZbTSWN0kLVSiWlKqeWwD
  1Ig99lnW1pYLu2Z4QYBN6NeyD8KUmH0Ie8pyb7aj0YMDGiYvjKnDJmz5V/fwemtG
  j1icyU2X8qLSRj+6tDL6SD7lhwrwLB+D6EH9eavcmV5mIHKqrrnDjb2iMQKBgAwg
  SMI/RVPThlgmJcBUDsaR33Z5ot2fmBYwhG/hBduJKFh4H/HRCN2aVdKEvXMZgmOO
  E0E6LmZ1g3JpDwOw83vgKnmuSItxAwBJPBav+Mp54zZkiYZrCD7RszPNevXNW1T7
  6xajI+MvpwNvqUYP3fUddcFIXF18RNsBSgkgj6vBAoGBAO63e4MXps+LaJFy/OS/
  7TUEvtDi2+/Fk9lJ0IOZ/TFv3hyklNy0a0BC9ONtOUsU4z4rXfmdKkW21Z7UP4cs
  4E/W8HH7Kfy/FNtDxkY9hCOZ+49xlRV6GMVLFh514s5s/yj8S7Y5ak72bSTWnx2k
  +GTtjdsbhhc6Moe9431k/K7i
  -----END PRIVATE KEY-----
  `
}