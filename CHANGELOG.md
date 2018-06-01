# Change Log
All notable changes to the "try-catch-wrapper" will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.1.1 2018-06-01

### Added
- Add supporting .ts and .js files;

## 0.1.0 2018-06-01

### Added
- Change structure, try-catch-wrapper expect more parameters
  errorHandler(errMsg, errCallBackFn, errCallBackFnArg)(someFunc);
- Partial application, try-catch-wrapper expect function which we want to handle error
  errorHandler()(someFunc);

## [Unreleased]
- Initial release
