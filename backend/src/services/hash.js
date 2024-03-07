var crypto = require("crypto");

module.exports = {
  hashPassword(password) {
    //Create salt
    const salt = crypto.randomBytes(16).toString("hex");
    // hashing with 100 iterations with salt,
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');
    return { hash, salt };
  },

  passwordValidation(password, hash, salt) {
    var hashCompare = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');

    console.log('hashCompare', hashCompare);
    return hash === hashCompare;
  },
};
