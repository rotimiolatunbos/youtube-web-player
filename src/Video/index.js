import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Sheet from '@mui/joy/Sheet';
import styles from './style';

const SkeletonWrapper = ({ children }) => (
  <Sheet sx={styles.video}>{children}</Sheet>
);

const Video = ({ videoId }) => {
  return (
    <Sheet sx={styles.container}>
      <Skeleton wrapper={SkeletonWrapper} height="100%" borderRadius="0" />

      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{ ...styles.video, zIndex: 122222 }}
      />
    </Sheet>
  );
};

export default Video;
