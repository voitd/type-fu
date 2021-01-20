import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';

import Character from './Character';
import useKeyPress from '../../hooks/useKeyPress';

const TextBox = ({ text }) => {
  const textByLine = text.split('\n');

  const [charsTyped, setCharsTyped] = useState([]);
  const [charToType, setCharToType] = useState([]);
  const [second, setSecond] = useState(0);

  const timer = useRef();

  useEffect(() => {
    const chars = textByLine.map(line =>
      line
        .trim()
        .split('')
        .map(c => c),
    );
    setCharToType(chars);
  }, []);

  useKeyPress(key => {
    if (key == 'Backspace') {
      setCharsTyped(prev => prev.filter((_, i) => i != prev.length - 1));
    }
    setCharsTyped(prev => [...prev, key]);
  });

  if (!timer.current && charsTyped.length > 0) {
    const start = Date.now();
    timer.current = setInterval(() => {
      let delta = Date.now() - start;
      setSecond(delta / 1000);
    }, 100);
  }

  if (timer.current && charToType.length < charsTyped.length) {
    clearInterval(timer.current)
    timer.current = null
  }

  const countChr = -1

  const correct = charsTyped.reduce((acc, chr, i) => {
    return chr === charToType[i] ? acc + 1 : acc  
  }, 0)

const accuracy = correct / chrsTyped.length * 100;
  const accuracyText = `${correct} / ${chrsTyped.length} (${(accuracy).toFixed(0)}%)`
  const wpm = (chrsTyped.length / 5) / (seconds / 60);

  return (
    <>
      <Box>
        <Typography>{`Accuracy: ${isNaN(accuracy) ? '-' : accuracyText}`}</Typography>
        <Typography>{`WPM: ${isNaN(wpm) ? '-' : (wpm).toFixed(0)}`}</Typography>
      </Box>
      {textByLine.map((line, i) =>
        <Box key={i}>
          {
            line.trim().split("").map((chr) => {
              countChr += 1
              return (
                <Character chr={chr} key={countChr} id={countChr} chrsTyped={chrsTyped} />
              )
            })
          }
        </Box>
      )}
    </>
  )
};

export default TextBox;
