import React from 'react';
import axios from 'axios';

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import VideoList from '../VideoList';
import VideoSearch from '../VideoSearch';
import SelectedVideo from '../SelectedVideo';
import Loading from '../Loading';

import {
  API_KEY,
  BASE_URL,
  DEFAULT_SEARCH_TERM,
  DEFAULT_VIDEOS_LIST,
} from '../constants';

import styles from './style.js';

import '../style.css';

const INITIAL_STATE = {
  nextPage: 'CBQQAA',
  prevPage: null,
  list: DEFAULT_VIDEOS_LIST,
  searchTerm: '',
  numOfResults: 10,
  selectedItem: DEFAULT_VIDEOS_LIST[0],
  loading: false,
  error: null,
};

export default function App() {
  const [state, setState] = React.useState(INITIAL_STATE);
  const { list, loading, searchTerm, numOfResults, selectedItem, error } =
    state;

  const handleVideoClick = (item) => {
    setState((prevState) => ({
      ...prevState,
      selectedItem: item,
    }));
  };

  const handleSearch = (text) => {
    setState((prevState) => ({
      ...prevState,
      searchTerm: text,
      loading: true,
    }));
  };

  const getResults = async (myPageToken) => {
    const pageToken = myPageToken ? `pageToken=${myPageToken}&` : '';

    try {
      const response = await axios.get(
        `${BASE_URL}?${pageToken}part=snippet&maxResults=${numOfResults}&q=${encodeURI(
          searchTerm
        )}&type=video&key=${API_KEY}`
      );
      const { nextPageToken, prevPageToken, items } = response.data;
      const list = items
        ? items.map((item) => {
            const {
              id: { videoId },
              snippet,
            } = item;
            return { ...snippet, videoId };
          })
        : [];

      setState((prevState) => {
        const newState = { ...prevState };

        newState.nextPage = nextPageToken ? nextPageToken : null;
        newState.prevPage = prevPageToken ? prevPageToken : null;
        newState.list = list;
        newState.loading = false;

        return newState;
      });
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error,
      }));
    }
  };

  React.useEffect(() => {
    if (searchTerm) {
      getResults();
    }
  }, [searchTerm]);

  return (
    <CssVarsProvider>
      <Sheet sx={styles.container}>
        <Sheet sx={styles.videoContainer}>
          {selectedItem && <SelectedVideo item={selectedItem} />}
        </Sheet>
        <Sheet sx={styles.listContainer}>
          <Sheet sx={styles.searchBoxContainer}>
            <VideoSearch onSearch={handleSearch} />
            <Typography level="body2">
              Showng results for "
              {searchTerm ? searchTerm : DEFAULT_SEARCH_TERM}"
            </Typography>
          </Sheet>

          {loading && <Loading />}

          {!loading && (
            <VideoList list={list} onVideoClick={handleVideoClick} />
          )}
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
}
