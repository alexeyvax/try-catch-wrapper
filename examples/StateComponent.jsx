import React, { Component } from 'react';
import errorHandler from 'try-catch-wrapper';

class StateCompoent extends Component {
  constructor(props) {
    super(props);

    this.someFunc = this.someFunc.bind(this);
    /* pass arguments to try-catch-wrapper */
    this.someFunc = errorHandler(
      'Error, in state component!',
      (err, arg) => console.log(err, arg, 'arg'),
      'some message in state component',
    )(this.someFunc);
  }

  someFunc(one, two, three) {
    console.log(one, two, three);
    throw new Error('Oops!');
    console.log(1234567890);
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
