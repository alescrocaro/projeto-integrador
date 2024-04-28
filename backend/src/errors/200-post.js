const post_errors = {
  200: "Post not found",
  201: "Post title length must be between 3 and 50 characters",
  202: "At least one image is required",
  203: "Image not found",
  204: "Cannot delete an image from a post that has only one image",
};

module.exports = { post_errors };
