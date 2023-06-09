const { DataTypes } = require("sequelize")

const seq = require('../db/sq')

const User = seq.define('koa_user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '用户密码',
    },
    is_admin: {
        type: DataTypes.BOOLEAN,                                                                           
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员，0：不是管理（默认）， 1：是管理员'
    }
})

module.exports = User