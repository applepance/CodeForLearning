import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from '../components/album/Album';
import { changeSong } from '../redux/action';
/**
 * container component
 * pure component
 */
// const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong: (song) => {
      dispatch(changeSong(song))
    }
  }
}
export default connect(null, mapDispatchToProps)(Album);
// export default Album