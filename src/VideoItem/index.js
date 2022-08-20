import React from 'react';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

import styles from './style';

const VideoItem = ({ item, onVideoClick }) => {
  return (
    <ListItem sx={styles.listItem}>
      <ListItemButton onClick={() => onVideoClick(item)}>
        <Sheet sx={styles.imgContainer}>
          <img
            src={item.thumbnails.default.url}
            height={item.thumbnails.default.height}
            width={item.thumbnails.default.url}
          />
        </Sheet>
        <ListItemContent style={styles.listItemContent}>
          <Typography level="body2" sx={styles.videoTitle}>
            {item.title}
          </Typography>
          <Typography level="body2">{item.channelTitle}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};

export default VideoItem;
