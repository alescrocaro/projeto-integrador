const validator = require("validator");
const { validation_errors } = require("../../errors/0-validation");
const { post_errors } = require("../../errors/200-post");

function validateUpdatePost(req, res, next) {
  console.log('validating')
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
