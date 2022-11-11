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
  MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJNUCpKDw73Cxdla
  Purb4SMWA0wnjKfbena/lKs/WmSDik+Xoh3GrTinsPELO5RVt4hHf3Ma634sAian
  2E5W3Ef8er73drtlJv+n37ASOA8IX6lJsUfevJyPa8EzXZEsvgJXsEnhdyc2HITy
  D+8UT7Vgl8Fb3Ac9ORkR7I0VpmOTAgMBAAECgYAGkr1WBCL7mHETXX9pIx5MXnMP
  NsSDyLsSCUIs0crKqUPGgVFuWqrn2DOAzat+1sQ1hFsfW5geLQB7kQmJlT6GtlxR
  cVRU0dvKcC8Tmic/Is1lFahxcPKy/x9I2Sx2y9ul5pqc++AsL/R/4RZJrWzxnfLF
  QqI6f8akH+tyXUFFgQJBAMSzIwG9vNZetMjuzK6uT9xsH1FhgqcWiVa98oEZpG5f
  VoMDqbGzJVRpPeHTIL4rLvSSbm4V7HfIHbv3QnX8xhECQQC/voVnCKcqOFUHbqFx
  S/9uF/heFmpkdnO39DOD7GBIfKKHO+VPLtB91Olrc4vSlhNNKzcjwA1JuBUG2Wzh
  4htjAkEAuKrVutS/bSMM53gKghT0tSRtYqIBX40w81bxTXMdhOHM/sN5lXNzIISN
  rG3i16cDNmojcwbyMqKWB9pjcxIVgQJASjtcMhNrhDDi2km+PrqJXPnysZpD/jjN
  e/4So5QzglyeH3TUxd794Hk5FNxa2WA4gLumUTTc8BlQKqKqQJjkuQI/NoCSbm83
  XrSBdg/mfYRPp6MPpvhVta4p5pLSbgsx/4PWF1I7aBLUI6rG8X3EyqY9k3W79EML
  eyqS/gQquq6W
  -----END PRIVATE KEY-----`
}