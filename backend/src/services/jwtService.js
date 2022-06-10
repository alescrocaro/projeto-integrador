const jwt = require('jsonwebtoken')

module.exports = {
    generateJwt(id, firstName, lastName, email) {
        const jwtSecret = process.env.JWT_SECRET
        const token = jwt.sign({
            id:id, 
            firstName:firstName, 
            lastName:lastName, 
            email:email
        }, jwtSecret);
        return token
    }
}