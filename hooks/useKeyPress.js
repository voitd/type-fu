import { useState, useEffect } from 'react';

const useKeyPress = cb => {
  const [keyPressed, setKeyPressed] = useState();

  useEffect(() => {
    const keyDownHandle = e => {
      const { key } = e;

      if (key.length === 1 || key === 'Backspace') {
        setKeyPressed(key);
        cb && cb(key);
      }
      if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
      }
    };
    const keyUpHandle = () => {
      setKeyPressed(null);
    };

    window.addEventListener('keydown', keyDownHandle);
    window.addEventListener('keyup', keyUpHandle);

    return () => {
      window.removeEventListener('keydown', keyDownHandle);
      window.removeEventListener('keyup', keyUpHandle);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
