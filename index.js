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
      return console.log(errorMessage.message || error.toString());
  }
};

/**
 * @typedef {Object} errorMessage
 * @prop {boolean} show - is show message to console
 * @prop {string} type - type of console
 * @prop {string} message - custom message
 */

/**
 * @param {function} func - function in which you handle errors
 * @param {function} errFunc - callback if you want to handle error
 * @param {Object} errorMessage - custom message to output
 * @param {Object<string: string>} errFuncParameters - parameters to error callback
 */
const errorHandler = ({
  func,
  errFunc = () => {},
  errorMessage = { show: true },
  errFuncParameters = {},
}) => {
  return (...args) => {
    try {
      return func.apply(null, args);
    } catch (error) {
      if (errorMessage.show) {
        showMessage(errorMessage, error);
      }
      return errFunc.call(null, errFuncParameters);
    }
  }
};

export default errorHandler;
