import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={cn(
          'btn', 
          'btn-secondary', 
          'left', 
          { active: activeButton === 'left' }
        )}
        onClick={() => setActiveButton('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={cn(
          'btn', 
          'btn-secondary', 
          'right', 
          { active: activeButton === 'right' }
        )}
        onClick={() => setActiveButton('right')}
      >
        Right
      </button>
    </div>
  );
  // END
};

export default BtnGroup;
