const log4js = require('log4js')

log4js.configure({
  appenders: {
    product: {
      type: 'file',
      filename: './logs/error.log'
    }
  },
  categories: {
    default: { appenders: ['product'], level: 'debug' }
  }
})

const logger = log4js.getLogger('anything')

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    logger.error(error)
    ctx.throw(error)
  }
}