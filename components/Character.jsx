import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Character = React.memo(
  ({ chr, id, typedChr }) => {
    const useStyles = makeStyles({
      lyric: {
        display: 'inline-block',
        whiteSpace: 'pre',
      }
    });

    const classes = useStyles();

    // let Typography;

    // const NextChar = () => <div className={classes.lyric} color={'textSecondary'}>{chr}</div>;
    // const CorrectChar = () => <div className={classes.lyric} color={'textSecondary'}>{chr}</div>;
    // const IncorrectChar = () => <div className={classes.lyric} color={'textSecondary'}>{chr}</div>;

    // if (id == typedChr.length) {
    //   Typography = NextChar;
    // } else if (id >= typedChr.length) {
    //   Typography = Typography;
    // } else if (typedChr[id] === chr) {
    //   Typography = CorrectChar;
    // } else {
    //   Typography = IncorrectChar;
    // }

    // return <Typography className={classes.lyric} color={'textSecondary'}>{chr}</Typography>;
    
    return (
      <Typography
        className={classes.lyric}
        color={'textSecondary'}
      >
        {chr}
      </Typography>
    );
  },
  (props, nextProps) => {
    if (
      props.id == nextProps.chrsTyped.length - 1 ||
      props.id == nextProps.chrsTyped.length ||
      props.id == nextProps.chrsTyped.length + 1
    ) {
      return false;
    } else {
      return true;
    }
  },
);

export default Character;
