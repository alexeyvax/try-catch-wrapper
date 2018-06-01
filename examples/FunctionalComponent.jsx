import React from 'react';
import errorHandler from 'try-catch-wrapper';

const errMsg = {
  show: true,
  type: 'warning',
  message: 'Error, in functional component!',
};

const errFnParam = 'some message in functional component';

const someFunc = (one, two, three) => {
  console.log(one, two, three);
  throw new Error('Oops!');
  console.log(1234567890);
};

const someFuncWraper = errorHandler(
  errMsg,
  (err, arg) => console.log(err, arg, 'arg'),
  errFnParam,
)(someFunc);

const FunctionalComponent = () => {
  return (
    <div className="functionalComponent">
      <button onClick={() => someFuncWraper('functional test component', 555, 888)}>
        Call some function FunctionalComponent
      </button>
    </div>
  );
};

export default FunctionalComponent;
