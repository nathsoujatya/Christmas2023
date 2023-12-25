// src/ChristmasGiftBox.js
/*
import React, { useState } from 'react';
import './ChristmasGiftBox.css';

const ChristmasGiftBox = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="gift-box-container" onClick={handleClick}>
        <div className="small-gift-box"></div>
        <div>{!clicked ? 'Click here for your gift' : 'Merry Christmas!'}</div>
      </div>
    </div>
  );
};

export default ChristmasGiftBox;
*/
// src/ChristmasGiftBox.js

// src/ChristmasGiftBox.js




/*
import React, { useState } from 'react';
import './ChristmasGiftBox.css';

const ChristmasGiftBox = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="gift-box-container">
        <div className={`gift-box ${clicked ? 'clicked' : ''}`} onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default ChristmasGiftBox;
*/

// src/ChristmasGiftBox.js

// src/ChristmasGiftBox.js

/*
import React, { useState } from 'react';
import './ChristmasGiftBox.css';

const ChristmasGiftBox = () => {
  const [revealed, setRevealed] = useState(false);

  const revealMessage = () => {
    setRevealed(true);
  };

  return (
    <div>
      {!revealed ? (
        <div className="small-gift-box" onClick={revealMessage}></div>
      ) : (
        <div className="cake-container">
          <div className="cake-image"></div>
          <div className="message">Merry Christmas!</div>
        </div>
      )}
    </div>
  );
};

export default ChristmasGiftBox;
*/

// ChristmasGiftBox.js

/*
import React, { useState } from 'react';
import './ChristmasGiftBox.css';

const ChristmasGiftBox = () => {
  const [revealed, setRevealed] = useState(false);

  const revealMessage = () => {
    setRevealed(true);
  };

  return (
    <div>
      {!revealed ? (
        <div className="small-gift-box" onClick={revealMessage}>
          <div className="message">GIFT HERE CLICK!!</div>
        </div>
      ) : (
        <div className="cake-container">
          <div className="cake-image"></div>
          <div className="message">Enjoy your cake!</div>
        </div>
      )}
    </div>
  );
};

export default ChristmasGiftBox;
*/

// ChristmasGiftBox.js
// ChristmasGiftBox.js
import React, { useState } from 'react';
import './ChristmasGiftBox.css';

const ChristmasGiftBox = ({ revealMessage }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);
    revealMessage();
  };

  return (
    <div>
      {!revealed ? (
        <div className="small-gift-box" onClick={handleClick}></div>
      ) : (
        <div className="cake-container">
          <div className="cake-image"></div>
          <div className="message">Merry Christmas!</div>
        </div>
      )}
    </div>
  );
};

export default ChristmasGiftBox;
