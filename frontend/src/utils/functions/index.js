/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} value - The input string to capitalize the first letter.
 * @return {string || undefined} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(value) {
  if (!value) return undefined;
  return value.charAt(0).toUpperCase() + value.slice(1);
}
