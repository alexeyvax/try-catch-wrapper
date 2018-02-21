# try-catch-wrapper
This package are simple wrapper, based on functional programming paradigm with higher order function

try-catch-wrapper can use with React or similar library!


## Examples

Use with React
[with state component](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/StatelessCompoent.jsx)

[with functional component](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/FunctionalComponent.jsx)

Use with vanila JS
[just JS](https://github.com/alexeyvax/try-catch-wrapper/blob/master/examples/justJS.js)


## Installation

```
npm install --save try-catch-wrapper
```

## How work with try-catch-wrapper

```
import errorHandler from 'try-catch-wrapper';

// expected one parameter with type Object
someFunc = errorHandler({ func: someFunc, errFunc, errorMessage, errFuncArgs });

function someFunc() {
  // come code
}

someFunc();
```

**func**: this is function in which you handle errors

**errFunc**: callback function if you want to handle error

**errorMessage**: if you want to pass your custom message to output when error happens

 - show {Boolean}
 - type {String}

    Possible variants:
    * error
    * warning
    * info
    * debug
    * log

 - message {String}

**errFuncArgs**: if you want you can pass arguments to error callback function
