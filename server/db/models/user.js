const db = require('../')
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// beter to set env value
const SECRET = process.env.SECRET || "THIS_IS_VERY_SECRET_WORDS"

const User = new Sequelize.Model('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})


User.prototype.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

User.prototype.generateToken = function () {

}

User.authenticate = function ({ username, password }) {
  const user = User.findOne({
    where: {
      username: username
    }
  })
  const validPw = user.correctPassword(password)
}
