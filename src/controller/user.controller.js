const { createUser } = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')
async function userRegister(ctx, next) {
    const { username, password } = ctx.request.body

    try {
        const res = await createUser(username, password)
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            result: {
                id: res.id,
                username: res.username,
            }
        }
    }catch(err) {
        ctx.app.emit('error', userRegisterError, ctx)
    }
}

async function userLogin(ctx, next) {
    ctx.body = '用户登录'
}

module.exports = {
    userRegister,
    userLogin,
}