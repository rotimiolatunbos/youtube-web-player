import React from 'react';

import TextField from '@mui/joy/TextField';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import SearchIcon from '@mui/icons-material/Search';

import styles from './style';

const VideoSearch = ({ onSearch }) => {
  const [text, setText] = React.useState('');

  return (
    <Sheet sx={styles.container}>
      <TextField
        value={text}
        placeholder="Search a video on youtube..."
        sx={styles.input}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => onSearch(text)} disabled={!text.trim()}>
        <SearchIcon />
      </Button>
    </Sheet>
  );
};

export default VideoSearch;
