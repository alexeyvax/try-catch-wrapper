import React from 'react';
import errorHandler from 'try-catch-wrapper';

const errMsg = {
  show: true,
  type: 'warning',
  message: 'Error, in functional component!',
};

const errFuncParameters = {
  message: 'some message in functional component',
};

let someFunc = (one, two, three) => {
  console.log(one, two, three);
  throw new Error('Oops!');
  console.log(1234567890);
};

const someErrCallback = (arg) => {
  console.log(arg, 'arg');
  console.log('someErrCallback have been called!');
};

someFunc = errorHandler({
  func: someFunc,
  errFunc: someErrCallback,
  errorMessage: errMsg,
  errFuncParameters: errFuncParameters,
});

const FunctionalComponent = () => {
  return (
    <div className="functionalComponent">
      <button onClick={() => someFunc('functional test component', 555, 888)}>
        Call some function FunctionalComponent
      </button>
    </div>
  );
};

export default FunctionalComponent;
