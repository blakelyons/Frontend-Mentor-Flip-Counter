/**
 * Formats a date value with leading zeros
 * @param {number} value - The numeric value to format
 * @param {number} digits - Number of digits to pad to (default: 2)
 * @returns {string} Formatted string with leading zeros
 */
export function padDateValue(value, digits = 2) {
    return value.toString().padStart(digits, "0");
}

/**
 * Gets a date from localStorage or returns a default
 * @param {string} key - localStorage key
 * @param {Date} defaultDate - Default date if not found
 * @returns {Date} Date object
 */
export function getStoredDate(key, defaultDate) {
    const stored = localStorage.getItem(key);
    return stored ? new Date(stored) : defaultDate;
}
