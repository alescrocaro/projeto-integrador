const { Post, User } = require('../models');
const { hashPassword, passwordValidation } = require('../services/hash');
const { generateJwt } = require('../services/jwtService');

module.exports = {
  async get(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ error: 'User not found' });
      delete user['password'];
      delete user['salt'];

      ////////////// descobrir reino com mais posts do usuário //////////////
      let topKingdomPost = [];

      const animaliaPosts = await Post.findAll({
        where: {
          UserId: id,
          kingdom: 'animalia'
        }
      });
      topKingdomPost.push(animaliaPosts.length);

      const protozoaPosts = await Post.findAll({
        where: {
          UserId: id,
          kingdom: 'protozoa'
        }
      });
      topKingdomPost.push(protozoaPosts.length);

      const plantaePosts = await Post.findAll({
        where: {
          UserId: id,
          kingdom: 'plantae'
        }
      });
      topKingdomPost.push(plantaePosts.length);

      const moneraPosts = await Post.findAll({
        where: {
          UserId: id,
          kingdom: 'monera'
        }
      });
      topKingdomPost.push(moneraPosts.length);

      const fungiPosts = await Post.findAll({
        where: {
          UserId: id,
          kingdom: 'fungi'
        }
      });
      topKingdomPost.push(fungiPosts.length);

      let max = [0, 0];
      for (let i = 0; i < topKingdomPost.length; i++) {
        if (topKingdomPost[i] > max[0]) {
          max[0] = i;
          max[1] = topKingdomPost[i];
        }
      }

      user.dataValues['topKingdomPostsAPI'] = max;

      //////////////////////////////////////////////////////////////////////

      console.log(user);

      res.status(200).json(user);
    } catch (e) {
      return res.status(500).json({ error: 'internal error' });
    }
  },

  async create(req, res) {
    const { firstName, lastName, email, password, bio } = req.body;
    if (email === null || password === null)
      return res
        .status(401)
        .json({ error: 'email and password should not be empty' });
    if (password.length < 6)
      return res
        .status(401)
        .json({ error: 'Password should be bigger than 6 digits' });

    try {
      const userFound = await User.findAll({ where: { email: email } });
      console.log(userFound);
      if (userFound.length > 0)
        return res.status(400).json({ error: 'Email is already registered' });

      const { hash, salt } = hashPassword(password);

      User.create({
        firstName,
        lastName,
        email,
        password: hash,
        salt: salt,
        bio
      });

      return res.status(200).json(200);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Internal Error' });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const data = await User.findOne({
        where: { email: email }
      });
      if (!data) return res.status(401).json({ error: 'User not found' });
      const user = data.dataValues;
      console.log(user);
      const isValid = passwordValidation(password, user.password, user.salt);
      if (!isValid) return res.status(401).json({ error: 'password invalid' });

      const token = generateJwt(
        user.id,
        user.firstName,
        user.lastName,
        user.email
      );
      res.status(200).json({ token: token });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: 'Internal error' });
    }
  }
};
