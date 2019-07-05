import { connect } from 'react-redux';
import Player from '../components/player/Player';
import { showplayer } from '../redux/action';


const mapStateToprops = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showMusicPlayer: (status) => {
      dispatch(showplayer(status));
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(Player)