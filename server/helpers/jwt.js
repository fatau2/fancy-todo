const jwt = require('jsonwebtoken')

const secret = "bro";

function generateToken(payload){
    return jwt.sign(payload,secret)
}

function verifyToken(token){
    return jwt.verify(token,secret)
}

module.exports = {
    generateToken,
    verifyToken
}