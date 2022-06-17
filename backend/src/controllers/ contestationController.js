const {Contestation} = require('../models');

module.exports = {

    async create(req, res) {
        const {userId, commentId} = req.body
        const contestation = await Contestation.findAll({where: {UserId:userId, CommentId:commentId}})

        if(contestation) return res.status(401),json({error:"User already resolves this contestation"})
        try {
            await Contestation.create({
                UserId:userId,
                CommentId:commentId
            })
            res.json({
                status:"contestation validated"
            })
        } catch (err) {
            return res.status(500),json({error:"Internal error"})
        }   
    },
}