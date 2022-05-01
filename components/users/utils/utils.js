const bcrypt = require("bcrypt");
const utils = {
  /**
   * Password encryption
   * @param {string} password
   * @returns {string} encryoted password
   */
  hashPassword: (password) => bcrypt.hashSync(password, 10),
  /**
   * @param {string} plainPassword
   * @param {string} encryptedPassword
   * @returns {boolean}
   */
  verifyPassword: (plainPassword, encryptedPassword) =>
    bcrypt.compareSync(plainPassword, encryptedPassword),
};

module.exports = utils;
