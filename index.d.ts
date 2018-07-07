declare const errorHandler: (errorMessage: any, errFn?: (err: any) => void, ...errFnParams: any[]) => (fn: any) => (...args: any[]) => any;
export default errorHandler;
