const { contestation_errors } = require("../errors/400-contestation");
const { sequelize, Comment, UserResolvedContestation } = require("../models");
const { v4: uuid } = require("uuid");

module.exports = {
  async create(req, res) {
    const { userId, commentId } = req.body;
    const contestationResolvedBy = await UserResolvedContestation.findAll({
      where: { commentId },
    });

    if (contestationResolvedBy?.length) {
      console.log("returning error: ", contestation_errors["400"]);
      return res
        .status(401)
        .json({ code: 400, message: contestation_errors["400"] });
    }

    if (contestationResolvedBy.some((data) => data.userId === userId)) {
      return res
        .status(401)
        .json({ code: 401, message: contestation_errors["401"] });
    }

    return await sequelize.transaction(async (t) => {
      const incrementResolvedAmountOfComment = Comment.increment(
        "resolvedAmount",
        { by: 1, where: { id: commentId } },
        { transaction: t }
      );
      const createUserResolvedContestationPromise =
        UserResolvedContestation.create(
          {
            id: uuid(),
            userId,
            commentId,
          },
          { transaction: t }
        );

      return await Promise.all([
        createUserResolvedContestationPromise,
        incrementResolvedAmountOfComment,
      ])
        .then(() => {
          console.log("returning success");
          return res.status(204).send();
        })
        .catch((error) => {
          console.log("returning error: ", error);
          return res.status(500).json({ code: 500, message: "Internal error" });
        });
    });
  },
};
