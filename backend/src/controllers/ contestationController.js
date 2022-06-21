const {Contestation} = require('../models');

module.exports = {

    async create(req, res) {
        const {userId, commentId} = req.body
        const contestation = await Contestation.findAll({where: {CommentId:commentId}})
        console.log(contestation)
        if (contestation.length >= 2) return res.status(401).json({error: 'Contestation is already resolved'})

        let userConst = false
        contestation.forEach(element => {
            if (element.id === userId) userConst = true
        });
        if(userConst) return res.status(401).json({error:"User already resolves this contestation"})
        try {
            await Contestation.create({
                UserId:userId,
                CommentId:commentId
            })
            res.json({
                status:"contestation validated"
            })
        } catch (err) {
            console.log(err)
            return res.status(500),json({error:"Internal error"})
        }   
    },
}