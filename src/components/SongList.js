import React, { Component } from 'react';
import { connect } from 'react-redux';
// ^ Function (also a React component) that lets us connect to the Redux Store in the Provider tag/component
import { selectSong } from '../actions';

class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props)
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps, {
  // selectSong: selectSong
  selectSong
  // 'connect' function is automatically calling the 'dispatch' function for us when we pass in an action creator (all happening behind the scenes)
})(SongList);
