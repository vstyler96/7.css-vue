let counter = 0;

/**
 * Generates a unique ID with optional prefix
 * @param {string} prefix - Optional prefix for the ID
 * @returns {string} - Unique ID string
 */
export function uniqueId(prefix = '') {
  counter += 1;
  return prefix ? `${prefix}-${counter}` : String(counter);
}

/**
 * Checks if code is running in browser environment
 * @returns {boolean} - True if in browser, false otherwise
 */
export const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Safely gets window dimensions with fallbacks
 * @returns {object} - Object with width and height properties
 */
export function getWindowDimensions() {
  if (!isBrowser()) {
    return { width: 800, height: 600 };
  }

  return {
    width: window.innerWidth || document.documentElement.clientWidth || 800,
    height: window.innerHeight || document.documentElement.clientHeight || 600,
  };
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Clamps a number between min and max values
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Clamped value
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
