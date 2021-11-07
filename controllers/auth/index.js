const { signup } = require('./signup')
const login = require('./login')
const { logout } = require('./logout')
const { current } = require('./current')
const avatars = require('./avatars')
const verify = require('./verify')
const reSend = require('./reSend')

module.exports = {
  signup,
  verify,
  login,
  logout,
  current,
  avatars,
  reSend
}
