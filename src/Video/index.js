import React from 'react';

import Sheet from '@mui/joy/Sheet';

import styles from './style';

const Video = ({ videoId }) => {
  return (
    <Sheet sx={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={styles.video}
      />
    </Sheet>
  );
};

export default Video;
