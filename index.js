/**
 * @typedef {Object|string} errorMessage
 * @prop {boolean} show - is show message to console
 * @prop {string} type - type of console
 * @prop {string} message - custom message
 *
 * or
 *
 * @prop {string} errorMessage - custom message
 */

/**
 * @param {Object|string} errorMessage - custom message to output
 * @param {error} error - Error
 */
const showMessage = (errorMessage, error) => {
  switch (errorMessage.type) {
    case 'error':
      return console.error(errorMessage.message || error.toString());
    case 'warning':
      return console.warn(errorMessage.message || error.toString());
    case 'info':
      return console.info(errorMessage.message || error.toString());
    case 'debug':
      return console.debug(errorMessage.message || error.toString());
    default:
      return console.log(errorMessage && errorMessage.message || error.toString());
  }
};

/**
 * @param {Object|string} errorMessage - custom message to output
 * @param {array} params - parameters to error callback function
 */
const isObject = (errorMessage, params) => {
  switch(true) {
    case ((typeof errorMessage === 'object') && 'message' in params):
      params.unshift(errorMessage.message);
      return params;
    case (typeof errorMessage === 'string'):
      params.unshift(errorMessage);
      return params;
    default:
      return params;
  }
}

/**
 * @param {Object|string} errorMessage - custom message to output
 * @param {function} errFn - callback if you want to handle error
 * @param {any} errFnParams - parameters to error callback function
 *
 * @param {function} fn - function in which you handle errors
 */
const errorHandler = (
  errorMessage = { show: false },
  errFn = (err, ...params) => {},
  ...errFnParams
) => (fn) => {
  return (...args) => {
    try {
      return fn.apply(null, args);
    } catch (error) {
      let params = isObject(errorMessage, errFnParams);;
      if (errorMessage.show) {
        showMessage(errorMessage || error.toString());
      }
      return errFn.call(null, error, ...params);
    }
  }
};

export default errorHandler;
