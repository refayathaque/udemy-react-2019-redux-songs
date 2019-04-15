import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Old Town Road', artist: 'Lil Nas X feat. Billy Ray Cirus' },
    { title: 'Sunflower', artist: 'Post Malone & Swae Lee' },
    { title: '7 Rings', artist: 'Ariana Grande' },
    { title: 'Wow.', artist: 'Post Malone' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
