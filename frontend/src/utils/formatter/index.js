class Formatter {
  /**
   * Capitalizes the first letter of a given string.
   *
   * @param {string} value - The input string to capitalize the first letter.
   * @return {string} The string with the first letter capitalized.
   */
  static capitalizeFirstLetter = value => {
    if (!value) return undefined;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  /**
   * Removes accents from a given string.
   *
   * @param {string} str - The input string to remove accents from.
   * @return {string} The string without accents.
   */
  static removeAccent(str) {
    if (!str) return undefined;
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Removes accents from a given string.
   *
   * @param {string} str - The input string to remove accents from.
   * @return {string} The string without accents.
   */
  static translateTaxonomyToEnglish(str) {
    if (!str) return undefined;
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}

export default Formatter;
