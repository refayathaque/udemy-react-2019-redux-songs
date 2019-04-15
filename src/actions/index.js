// Action Creator
// Named export example (used to export several different functions from a single file)
export const selectSong = (song) => {
  // Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

// Default export example
// export default selectSong
