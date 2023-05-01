const { getUserInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited } = require('../constant/err.type')

// 判断用户输入姓名和密码是否为空
const userValidtor = async (ctx, next) => {
    const { username, password } = ctx.request.body
    if(!username || !password) {
        ctx.app.emit('error', userFormateError, ctx)
        // ctx.status = 400,
        // ctx.body = {
        //     code: '10001',
        //     message: '用户名或密码不能为空',
        //     result: '',
        // }
        return
    }

    await next()
}

// 判断数据库中是否已经存在该用户
const verifyUser = async (ctx, next) => {
    const { username } = ctx.request.body
    // 2.操作数据库
    if(await getUserInfo({username})) {
        ctx.app.emit('error', userAlreadyExited, ctx)
        // ctx.status = 401
        // ctx.body = {
        //     code: 10002,
        //     message: '已经存在该用户',
        //     result: ''
        // }
        return
    }

    await next()
} 

module.exports = {
    userValidtor,
    verifyUser,
}