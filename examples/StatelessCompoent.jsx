import React, { Component } from 'react';
import errorHandler from 'try-catch-wrapper';

const errMsg = {
  show: true,
  type: 'warning',
  message: 'Error, in state component!',
};

const errFuncParameters = {
  message: 'some message state component',
};

class StatelessCompoent extends Component {
  constructor(props) {
    super(props);

    this.someErrCallback = this.someErrCallback.bind(this);
    /* pass arguments to try-catch-wrapper */
    this.someFunc = errorHandler({
      func: this.someFunc.bind(this),
      errFunc: this.someErrCallback,
      errorMessage: errMsg,
      errFuncParameters: errFuncParameters,
    });
  }

  someFunc(one, two, three) {
    console.log(one, two, three);
    throw new Error('Oops!');
    console.log(1234567890);
  }

  someErrCallback(arg) {
    console.log(arg, 'arg');
    console.log('someErrCallback have been called!');
  }

  render() {
    return (
      <div className="statelessCompoent">
        <button onClick={() => this.someFunc('state test component', 555, 888)}>
          Call some function StatelessCompoent
        </button>
      </div>
    );
  }
}

export default StatelessCompoent;
