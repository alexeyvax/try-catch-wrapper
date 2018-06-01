# try-catch-wrapper

This package are simple wrapper, based on functional programming paradigm with higher order function

try-catch-wrapper can use with Pure Js, React or similar library!


## Examples

**Use with vanila JS**

 - [just JS](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/justJS.js)


**Use with React**

 - [with state component](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/StateComponent.jsx)

 - [with functional component](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/FunctionalComponent.jsx)


## Installation

```
npm install --save try-catch-wrapper

or

yarn add try-catch-wrapper
```

## How work with try-catch-wrapper

```
import errorHandler from 'try-catch-wrapper';

const someFuncWrapper = errorHandler(errorMessage, errFn, errFnArg)(someFunc);

function someFunc() {
  // come code
}

someFuncWrapper();
```

**someFunc**: this is function in which you handle errors

**errFn**: callback function if you want to handle error

```
(err, args) => { console.log(err, args); }
```

**errFnArg**: if you want, you can pass arguments to error callback function separate by comma

```
'error happens in someFunc', 'some message', etc...
```

**errorMessage**: if you want to pass your custom message to output when error happens
You can pass Object and string.

Object:
 - show {Boolean}
 - type {String}

    Possible variants:
    * error
    * warning
    * info
    * debug
    * log

 - message {String}

```
const errMsg = {
  show: true,
  type: 'warning',
  message: 'Error, in function someFunc!',
};
```

String:

 ```
const errMsg = 'Error, in function someFunc!';
 ```
