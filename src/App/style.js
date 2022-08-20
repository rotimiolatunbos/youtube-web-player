const container = {
  maxWidth: 1200,
  mx: 'auto',
  mb: 1,
  display: 'flex',
  pt: '8px',
};

const videoContainer = {
  flex: 1,
};

const listContainer = {
  display: 'flex',
  flexDirection: 'column',
  float: 'right',
  width: 400,
};

const searchBoxContainer = {
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  zIndex: 100000,
  pt: '8px',
  px: '12px',
  mt: '-8px',
  pb: '2px',
};

export default { container, videoContainer, listContainer, searchBoxContainer };
