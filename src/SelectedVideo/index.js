import React from 'react';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import Video from '../Video';

import styles from './style.js';

const SelectedVideo = ({ item }) => {
  return (
    <Sheet sx={styles.container}>
      <Video videoId={item.videoId} />
      <Typography level="h5">{item.title}</Typography>
      <Typography>{item.channelTitle}</Typography>
      <br />
      <Typography>{item.description}</Typography>
    </Sheet>
  );
};

export default SelectedVideo;
