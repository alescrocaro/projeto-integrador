const {User} = require('../models')
const  {hashPassword} = require("../services/hash")

module.exports = {

    async get(req, res) {
        const {id} = req.params
        try {
            const user = await User.findByPk(id)
            if (!user) return res.status(400).json({error:"User not found"})
            res.status(200).json(user)
        } catch (e) {
            return res.status(500).json({error:"internal error"})
        }
    },
    
    async create(req, res) {
        const {firstName,lastName,email,password} = req.body

        if (email === null || password  === null) return res.status(401).json({error:"email and password should not be empty"})

        if (password.length < 6) return res.status(401).json({error:"Password should be bigger than 6 digits"})
    
        try {
            const userFound = await User.findAll({where: {email:email}})
            console.log(userFound)
            if(userFound.length > 0) return res.status(400).json({error: "Email is already registered"})
            
            const {hash,salt} = hashPassword(password)

            User.create({
                firstName,
                lastName,
                email,
                password:hash,
                salt:salt
            })

            return res.status(200).json(200)

        } catch (e) {
            console.log(e)
            return res.status(500).json({error:"Internal Error"})
        }
    }


}