const Koa = require('koa')

// 注意要以这样的方式引入
const { koaBody } = require('koa-body')

const errHandler = require('./errHandler')

const app = new Koa()

const userRouter = require('../router/user.router')

app.use(koaBody())

app.use(userRouter.routes())

app.on('error', errHandler)

module.exports = app