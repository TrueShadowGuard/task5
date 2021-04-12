const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    banned: {type: Boolean, default: false}
})

module.exports = model('User', User)
