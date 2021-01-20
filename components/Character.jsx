import { Typography } from '@material-ui/core';
import React from 'react';

const Character = React.memo(
  ({ chr, id, chrsTyped }) => {
    const classes = useStyles();
    let CharTypography;

    if (id == chrsTyped.length) {
      CharTypography = NextCharTypography;
    } else if (id >= chrsTyped.length) {
      CharTypography = Typography;
    } else if (chrsTyped[id] === chr) {
      CharTypography = CorrectTextTypography;
    } else {
      CharTypography = IncorrectTextTypography;
    }

    return (
      <CharTypography className={classes.lyric} color={'textSecondary'}>
        {chr}
      </CharTypography>
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
