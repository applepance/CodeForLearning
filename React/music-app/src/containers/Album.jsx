import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from '../components/album/Album';
/**
 * container component
 * pure component
 */
const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {}
// export default connect(mapStateToProps, mapDispatchToProps)(Album);
export default Album