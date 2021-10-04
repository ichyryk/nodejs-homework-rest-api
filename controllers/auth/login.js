const jwt = require('jsonwebtoken')
const { User } = require('../../models')
const { BadRequest } = require('http-errors')
const sendSuccessResponse = require('../../helpers')

const { SECRET_KEY } = process.env

const login = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }, '_id email password')
  if (!user || !user.comparePassword(password)) {
    throw new BadRequest('Email or password is wrong')
  }
  const { _id } = user
  const payload = {
    _id
  }
  const token = jwt.sign(payload, SECRET_KEY)
  await User.findByIdAndUpdate(_id, { token })
  sendSuccessResponse(res, { token }, 200)
}

module.exports = {
  login
}
