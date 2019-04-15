import React from 'react';
// Curly brace requred for named exports, not default exports
import { selectSong } from '../actions';
import SongList from './SongList'

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
