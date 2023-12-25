// index.js
/*
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import ChristmasGiftBox from './ChristmasGiftBox';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ChristmasGiftBox />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ChristmasGiftBox from './ChristmasGiftBox';
import './index.css';

// Function to reveal the message
const revealMessage = () => {
  console.log('Message revealed!');
  // You can add any logic or UI update related to revealing the message here
};

ReactDOM.render(
  <React.StrictMode>
    <ChristmasGiftBox revealMessage={revealMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);


