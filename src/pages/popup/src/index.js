import React from 'react';
import ReactDOM from 'react-dom';

chrome.runtime.getBackgroundPage((bgWindow) =>
  bgWindow.Weer.ErrorCatchers.installListenersOn({ hostWindow: window, nameForDebug: 'PUP' }, () => {

    ReactDOM.render(
      <button onClick={() => { throw new TypeError('I\'m a type error!'); }}>Throw an Error!</button>,
      document.getElementById('root'),
    );

  }),
);

