import React from 'react';
import ReactDOM from 'react-dom';

ReactDom.render(
  () => (<button
    onClick={() => { throw new TypeError('I\'m a type error!') }}
  >
    Throw an Error
  </button>),
  document.getElementById('root'),
);
