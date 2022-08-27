import React from 'react';

import Sheet from '@mui/joy/Sheet';

import ClipLoader from 'react-spinners/ClipLoader';
import styles from './style';

const Loading = () => {
  return (
    <Sheet sx={styles.container}>
      <ClipLoader />
    </Sheet>
  );
};

export default Loading;
