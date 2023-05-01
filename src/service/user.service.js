const User = require('../model/user.model')

async function createUser(username, password) {
    const res = await User.create({username, password})
    return res.dataValues
}

async function getUserInfo({...args}) {
    const whereOpt = {...args}
    const res = await User.findOne({
        attributes: ['id', 'username', 'password', 'is_admin'],
        where: whereOpt,
    })
    return res ? res.dataValues : null
}

module.exports = {
    createUser,
    getUserInfo,
}