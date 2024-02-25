const { Post, User, Comment, UserResolvedContestation } = require("../models");
const { hashPassword, passwordValidation } = require("../services/hash");
const { generateJwt } = require("../services/jwtService");
const { user_errors } = require("../errors/100-user");
const { v4: uuid } = require("uuid");

module.exports = {
  async get(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id, {
        include: [
          { model: UserResolvedContestation, attributes: ["commentId"] },
        ],
      });

      if (!user) return res.status(400).json({ error: "User not found" });
      delete user["password"];
      delete user["salt"];

      ////////////// descobrir reino com mais posts do usuário //////////////
      let topKingdomPost = [];

      const animaliaPosts = await Post.findAll({
        where: {
          userId: id,
          kingdom: "animalia",
        },
      });
      topKingdomPost.push(animaliaPosts.length);

      const protozoaPosts = await Post.findAll({
        where: {
          userId: id,
          kingdom: "protozoa",
        },
      });
      topKingdomPost.push(protozoaPosts.length);

      const plantaePosts = await Post.findAll({
        where: {
          userId: id,
          kingdom: "plantae",
        },
      });
      topKingdomPost.push(plantaePosts.length);

      const moneraPosts = await Post.findAll({
        where: {
          userId: id,
          kingdom: "monera",
        },
      });
      topKingdomPost.push(moneraPosts.length);

      const fungiPosts = await Post.findAll({
        where: {
          userId: id,
          kingdom: "fungi",
        },
      });
      topKingdomPost.push(fungiPosts.length);

      let maxPost = [0, 0];
      for (let i = 0; i < topKingdomPost.length; i++) {
        if (topKingdomPost[i] > maxPost[0]) {
          maxPost[0] = i;
          maxPost[1] = topKingdomPost[i];
        }
      }

      user.dataValues["topKingdomPostsAPI"] = maxPost;

      //////////////////////////////////////////////////////////////////////

      /////////////////////// Top Comments /////////////////////////////////

      let allKingdomComment = [];

      const userComments = await Comment.findAll({
        where: {
          userId: id,
          type: "COMMENT",
        },
      });

      var commentInfo = [0, 0, 0, 0, 0];
      for (let i = 0; i < userComments.length; i++) {
        allKingdomComment[i] = await Post.findOne({
          where: {
            id: userComments[i].dataValues.postId,
          },
        });

        switch (allKingdomComment[i].dataValues.kingdom) {
          case "animalia":
            commentInfo[0] += 1;
            break;
          case "protozoa":
            commentInfo[1] += 1;
            break;
          case "plantae":
            commentInfo[2] += 1;
            break;
          case "monera":
            commentInfo[3] += 1;
            break;
          case "fungi":
            commentInfo[4] += 1;
            break;
        }
      }

      let maxComment = [0, 0];
      for (let i = 0; i < commentInfo.length; i++) {
        if (commentInfo[i] > maxComment[0]) {
          maxComment[0] = i;
          maxComment[1] = commentInfo[i];
        }
      }

      user.dataValues["commentInfo"] = maxComment;

      //////////////////////////////////////////////////////////////////////

      /////////////////////// Top Contestation /////////////////////////////

      let allKingdomContestation = [];
      const userContestations = await Comment.findAll({
        where: {
          userId: id,
          type: "CONTESTATION",
        },
      });

      var contestationInfo = [0, 0, 0, 0, 0];
      for (let i = 0; i < userContestations.length; i++) {
        allKingdomContestation[i] = await Post.findOne({
          where: {
            id: userContestations[i].dataValues.postId,
          },
        });

        switch (allKingdomContestation[i].dataValues.kingdom) {
          case "animalia":
            contestationInfo[0] += 1;
            break;
          case "protozoa":
            contestationInfo[1] += 1;
            break;
          case "plantae":
            contestationInfo[2] += 1;
            break;
          case "monera":
            contestationInfo[3] += 1;
            break;
          case "fungi":
            contestationInfo[4] += 1;
            break;
        }
      }

      let maxContestation = [0, 0];
      for (let i = 0; i < contestationInfo.length; i++) {
        if (contestationInfo[i] > maxContestation[0]) {
          maxContestation[0] = i;
          maxContestation[1] = contestationInfo[i];
        }
      }

      user.dataValues["contestationInfo"] = maxContestation;

      //////////////////////////////////////////////////////////////////////

      /////////////////////// Somas contribuicois //////////////////////////

      let contributionsInfo = [0, 0, 0, 0, 0];

      for (let i = 0; i < contestationInfo.length; i++) {
        contributionsInfo[i] =
          topKingdomPost[i] + commentInfo[i] + contestationInfo[i];
      }

      user.dataValues["contributionsInfo"] = contributionsInfo;

      //
      //
      //
      //
      //

      res.status(200).json(user);
    } catch (e) {
      return res.status(500).json({ error: "internal error" });
    }
  },

  async create(req, res) {
    const { name, email, password, bio } = req.body;
    if (email === null || password === null)
      return res
        .status(401)
        .json({ error: "email and password should not be empty" });
    if (password.length < 6)
      return res
        .status(401)
        .json({ error: "Password should be bigger than 6 digits" });

    try {
      let userFound = null;
      try {
        userFound = await User.findAll({ where: { email: email } });
      } catch (error) {
        console.log("error getting user", error);
        return res.status(500).json({ message: "Error getting user" });
      }

      if (userFound?.length > 0) {
        return res.status(400).json({ code: 100, message: user_errors["100"] });
      }
      const { hash, salt } = hashPassword(password);

      User.create({
        id: uuid(),
        name,
        email,
        password: hash,
        salt,
        bio,
      });

      return res.status(200).json(200);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Error" });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const data = await User.findOne({
        where: { email: email },
      });
      if (!data) {
        console.log("user not found");
        return res.status(401).json({ message: "User not found" });
      }
      const user = data.dataValues;

      const isValid = passwordValidation(password, user.password, user.salt);
      if (!isValid)
        return res.status(401).json({ message: "password invalid" });

      const token = generateJwt(user.id, user.name, user.email);
      res.status(200).json({ token: token });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Internal error" });
    }
  },
};
