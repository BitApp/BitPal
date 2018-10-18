const payment = require('../services/controller/payment')
const ratelimit = require('koa-ratelimit')
const Redis = require('ioredis')

module.exports = function(routers) {
  // button
  routers.get('/', payment.create)
  routers.get('/:symbol/:text/:style?', payment.create)
}