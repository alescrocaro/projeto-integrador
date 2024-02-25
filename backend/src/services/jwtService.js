const jwt = require('jsonwebtoken')

module.exports = {
    generateJwt(id, name, email) {
        const jwtSecret = process.env.JWT_SECRET
        const token = jwt.sign({
            id:id, 
            name, 
            email:email
        }, jwtSecret);
        return token
    }
}
