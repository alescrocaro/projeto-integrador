const validator = require("validator");
const { validation_errors } = require("../../errors/0-validation");
const { post_errors } = require("../../errors/200-post");
const { Post } = require("../../models");

function validatePostBody(req, res) {
  const keys = Object.keys(req.body);
  const modelAttributes = Object.keys(Post.rawAttributes);

  const invalidKeys = keys.filter(key => !modelAttributes.includes(key));

  if (invalidKeys.length) {
    return res.status(400).json({ message: `BAD USER INPUT. The following fields doesn't exist in Post model: ${invalidKeys.join(', ')}` });
  }
}

function validateUpdatePost(req, res, next) {
  validatePostBody(req, res);

  if (!validator.isUUID(req.params.id)) {
    return res
      .status(400)
      .json({ code: 0, message: validation_errors["000"] });
  }

  if (
    req.body.title &&
    !validator.isLength(req.body.title, { min: 3, max: 50 })
  ) {
    return res.status(400).json({ code: 201, message: post_errors["201"] });
  }

  next();
}

module.exports = {
  validateUpdatePost,
};
