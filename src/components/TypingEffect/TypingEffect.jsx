import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 200); // Adjust typing speed here

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, displayText, text]);

  return (
    <div>
      {displayText}
    </div>
  );
};

export default TypingEffect;
