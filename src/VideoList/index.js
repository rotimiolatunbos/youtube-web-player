import React from 'react';

import List from '@mui/joy/List';
import VideoItem from '../VideoItem';

import styles from './style';

const VideoList = ({ list, onVideoClick, selectedItem }) => {
  return (
    <List sx={styles.list}>
      {list.map((item) => {
        return (
          <>
            <VideoItem
              selected={item.videoId === selectedItem.videoId}
              item={item}
              key={item.videoId}
              onVideoClick={onVideoClick}
            />
          </>
        );
      })}
    </List>
  );
};

export default VideoList;
