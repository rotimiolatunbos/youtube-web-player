import React from 'react';
import Skeleton from 'react-loading-skeleton';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

import styles from './style';

const VideoImageSkeletonWrapper = ({ children }) => {
  return <Sheet>{children}</Sheet>;
};

const VideoItem = ({ item, onVideoClick, selected }) => {
  return (
    <ListItem
      sx={
        selected ? { ...styles.listItem, bgcolor: '#fffbc8' } : styles.listItem
      }
    >
      <ListItemButton onClick={() => onVideoClick(item)}>
        <Sheet sx={styles.imgContainer}>
          <Skeleton
            wrapper={VideoImageSkeletonWrapper}
            height={item.thumbnails.default.height}
            width={item.thumbnails.default.width}
          />
          <Sheet sx={{ zIndex: 999, position: 'absolute', top: 0 }}>
            <img
              src={item.thumbnails.default.url}
              height={item.thumbnails.default.height}
              width={item.thumbnails.default.url}
            />
          </Sheet>
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
